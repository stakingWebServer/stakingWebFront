'use client'

import getQuestionsList from "@/api/inquiryAnswer";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import AnswerModal from "./answerModal";
import ImgModal from "./ImgModal";

type File = {
    fileName: string;
    fileUrl: string;
}

export type QuestionData = {
    questionId: string;
    title: string;
    contentIndex: string;
    fileInfos: File[];
    replyYn: string;
}

export default function AnswerList() {
    const [data, setData] = useState<QuestionData[]>([]);
    const [contentIndex, setContentIndex] = useState<number | null>(2) //몇 번째 content 클릭했는지
    const [imgModalData, setimgModalData] = useState<File | null>(null) //모달창에 띄울 img 데이터
    // const [modal, setModal] = useState(false);
    // const [modalData, setModalData] = useState<QuestionData | null>(null)

    const handleGetQuestionList = async () => {
        const result = await getQuestionsList();
        setData(result.result);
    }

    // const handleAnswerModal = (questionData: QuestionData) => {
    //     setModal(!modal);
    //     setModalData(questionData)
    // }

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
                                <textarea className="w-full h-[150px]" value={item.contentIndex} readOnly />
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
                                {item.replyYn === 'N' && <Button text={"답변등록"} size={200} onClick={() => { }} />}

                            </div>}
                    </li>
                ))}
            </ul>
            {imgModalData && <ImgModal imgData={imgModalData} setModal={setimgModalData} />}
            {/* {modal && <AnswerModal data={modalData} />} */}
        </div>
    )
}