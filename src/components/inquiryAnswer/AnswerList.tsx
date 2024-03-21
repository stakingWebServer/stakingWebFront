'use client'

import getQuestionsList from "@/api/inquiryAnswer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import AnswerModal from "./AnswerModal";
import ImgModal from "./ImgModal";

type File = {
    fileName: string;
    fileUrl: string;
}

export type ImgModalData = File | null;

export type QuestionData = {
    questionId: string;
    title: string;
    content: string;
    fileInfos: File[];
    replyYn: string;
    replyContent: string;
}

const textareaCss = 'w-full border border-slide p-3'

export default function AnswerList() {
    const [data, setData] = useState<QuestionData[]>([]);
    const [contentIndex, setContentIndex] = useState<number | null>(null) //몇 번째 content 클릭했는지
    const [imgModalData, setimgModalData] = useState<ImgModalData>(null) //모달창에 띄울 img 데이터
    const [answerModalId, setAnswerModalId] = useState<string | null>(null);

    const handleGetQuestionList = async () => {
        const result = await getQuestionsList();
        setData(result.result);
    }


    useEffect(() => {
        handleGetQuestionList();
    }, [])

    console.log(data)

    return (
        <div >
            <p className="bg-gray-200 p-6">Question List</p>
            <ul>
                {data.map((item, i) => (
                    <li
                        onClick={() => setContentIndex(i)}
                        key={item.questionId}
                        className={`${i % 2 === 0 ? 'bg-blue-300' : 'bg-blue-100'} cursor-pointer flex flex-wrap my-1`}>
                        <div className="w-full flex justify-between p-6">
                            <p>{item.title}</p>
                            <p className={item.replyYn === 'true' ? "text-blue-600" : "text-red-600"}>{item.replyYn === 'N' ? '미답변' : '답변완료'}</p>
                        </div>
                        {contentIndex === i &&
                            <div className="bg-white m-1 p-6 w-full">
                                <textarea className={`${textareaCss} h-[150px]`} value={item.content} readOnly />
                                <div className="flex justify-end">
                                    {item.fileInfos.map((item) =>
                                        <Image
                                            className="m-1"
                                            key={item.fileUrl}
                                            width={60}
                                            height={60}
                                            src={item.fileUrl}
                                            alt={item.fileName}
                                            onClick={() => setimgModalData(item)}
                                        />
                                    )}
                                </div>
                                {item.replyYn === 'N' ?
                                    <Button text={"답변등록"} size={200} onClick={() => setAnswerModalId(item.questionId)} />
                                    : <textarea className={`${textareaCss} h-[100px]`} value={item.replyContent} readOnly />}
                            </div>}
                    </li>
                ))}
            </ul>
            {imgModalData && <ImgModal imgData={imgModalData} setModal={setimgModalData} />}
            {answerModalId && <AnswerModal id={answerModalId} />}
        </div>
    )
}