"use client";

import pushSend from "@/api/push";
import React, { useState } from "react";
import Button from "../ui/Button";
import InputBox from "../ui/InputBox";
import TextareaBox from "../ui/TextareaBox";

interface Props {
  handleGetPushList: () => Promise<void>;
}

export default function PushSendBox({ handleGetPushList }: Props) {
  const [sendData, setSendData] = useState({
    title: "",
    content: "",
    advertisementPushYn: "N",
    alarmDetailKind: "01",
  });

  //데이터 변경
  const pushDataChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setSendData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  //push 전송
  const handlePush = async () => {
    const result = await pushSend(sendData);

    if (result.status === "SUCCESS") {
      alert("전송에 성공했습니다.");
      setSendData({
        ...sendData,
        title: "",
        content: "",
      });
      handleGetPushList();
    } else {
      alert("전송에 실패했습니다.");
    }
  };

  return (
    <div className="w-[45%] p-5 rounded-lg text-center  bg-slate-100 ">
      <InputBox
        text="제목"
        id="title"
        type="text"
        onChange={pushDataChange}
        value={sendData.title}
      />
      <TextareaBox
        text="내용"
        id="content"
        onChange={pushDataChange}
        value={sendData.content}
      />
      <Button text="전송" size={400} onClick={handlePush} />
    </div>
  );
}
