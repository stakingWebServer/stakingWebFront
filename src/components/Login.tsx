'use client'

import login from "@/api/login";
import { useState } from "react";
import Button from "./ui/Button";
import InputBox from "./ui/InputBox";
import { redirect } from "next/navigation";

export default function Login() {
    const [loginData, setLoginData] = useState({
        loginId: '',
        password: ''
    })

    //로그인 데이터 변경
    const loginDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLoginData(prevLoginData => ({
            ...prevLoginData,
            [name]: value
        }));
    }

    //로그인 요청
    const handleLogin = async () => {
        const result = await login(loginData);
        console.log(result)
        // if (result.status === 200) {
        //     redirect('/dashboard')
        // }
    }


    return (
        <div className="w-full text-center mt-20">
            <div className="w-80 mx-auto border border-solid border-gray-200 rounded-lg p-8">
                <h2 className="text-lg">로그인</h2>
                <div className="mt-3 ">
                    <InputBox type="text" text={'아이디'} id='loginId' loginDataChange={loginDataChange} />
                    <InputBox type="password" text={'비밀번호'} id='password' loginDataChange={loginDataChange} />
                </div>
                <Button text={'로그인'} size={150} onClick={handleLogin} />
            </div>
        </div>
    )
}