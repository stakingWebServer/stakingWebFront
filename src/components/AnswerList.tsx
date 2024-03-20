'use client'

import getQuestionsList from "@/api/inquiryAnswer";
import { useEffect, useState } from "react";

type QuestionList = {
    questionId: string;
    title: string;
    content: string;
    fileInfos: [];
    replyYn: string;
}

export default function AnswerList() {
    const [data, setData] = useState<QuestionList[]>([]);

    const handleGetQuestionList = async () => {
        const result = await getQuestionsList();
        setData(result.result);
    }

    useEffect(() => {
        handleGetQuestionList();
    }, [])

    return (
        <div >
            <p className="bg-gray-200 p-6">Question List</p>
            <ul>
                {data.map(item => (
                    <li key={item.questionId} className="cursor-pointer flex p-6 justify-between border-b border-solid border-gray-300">
                        <p>{item.title}</p>
                        <p className={item.replyYn === 'true' ? "text-blue-600" : "text-red-600"}>{item.replyYn === 'N' ? '미답변' : '답변완료'}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}