"use client";

import login from "@/api/login";
import { useState } from "react";
import Button from "./ui/Button";
import InputBox from "./ui/InputBox";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter(); // useRouter 훅 사용

  const [loginData, setLoginData] = useState({
    loginId: "",
    password: "",
  });

  //로그인 데이터 변경
  const loginDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };
  //빈 데이터 있는지 확인
  const inputCheck = () => {
    if (loginData.loginId === "" || loginData.password === "") {
      alert("빈칸을 입력해 주세요");
      return false;
    }
    return true;
  };

  //로그인 요청//test
  const handleLogin = async () => {
    if (!inputCheck()) return;

    const result = await login(loginData);

    if (result.status === "FAIL") {
      alert(result.errorMessage);
    } else if (result.status === "SUCCESS") {
      alert("로그인에 성공했습니다.");
      Cookies.set("token", result.result.accessKey, { expires: 7, path: "/" });
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-full text-center mt-20">
      <div className="w-80 mx-auto border border-solid border-gray-200 rounded-lg p-8">
        <h2 className="text-lg text-violet-800">로그인</h2>
        <div className="mt-3 ">
          <InputBox
            type="text"
            text={"아이디"}
            id="loginId"
            onChange={loginDataChange}
            value={loginData.loginId}
          />
          <InputBox
            type="password"
            text={"비밀번호"}
            id="password"
            onChange={loginDataChange}
            value={loginData.password}
          />
        </div>
        <Button text={"로그인"} size={150} onClick={handleLogin} />
      </div>
    </div>
  );
}
