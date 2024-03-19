'use client'

import { useState } from "react";
import Button from "./ui/Button";
import InputBox from "./ui/InputBox";
import TextareaBox from "./ui/TextareaBox";

export default function PushSendBox() {
    const [sendData, setSendData] = useState({
        title: '',
        content: ''
    });

    const handlePush = () => {

    }

    return (
        <div className="w-[500px] mx-auto bg-gray-200 p-5 rounded-lg text-center">
            <InputBox text="제목" id="title" type='text' onChange={() => { }} />
            <TextareaBox text="내용" id="content" onChange={() => { }} />
            <Button text="전송" size={400} onClick={() => { }} />
        </div>
    )
}