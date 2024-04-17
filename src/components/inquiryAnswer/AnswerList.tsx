"use client";

import getQuestionsList from "@/api/inquiryAnswer";
import { useEffect, useState } from "react";
import Answer from "./Answer";

export type File = {
  fileName: string;
  fileUrl: string;
};

export type QuestionData = {
  questionId: string;
  title: string;
  content: string;
  fileInfos: File[];
  replyYn: string;
  replyContent: string;
};

export default function AnswerList() {
  const [data, setData] = useState<QuestionData[]>([]);
  const [contentIndex, setContentIndex] = useState<number | null>(null); //몇 번째 content 클릭했는지

  //questionList 받아오기
  const handleGetQuestionList = async () => {
    const result = await getQuestionsList();
    setData(result.result);
  };

  //질문 클릭했을 때
  const questionClick = (i: number) => {
    if (i === contentIndex) setContentIndex(null);
    else setContentIndex(i);
  };

  useEffect(() => {
    handleGetQuestionList();
  }, []);

  return (
    <div>
      <p className="bg-gray-200 p-6">Question List</p>
      <ul>
        {data.map((item, i) => (
          <li
            onClick={() => questionClick(i)}
            key={item.questionId}
            className={`${
              i % 2 === 0 ? "bg-blue-300" : "bg-blue-100"
            } cursor-pointer flex flex-wrap my-1`}>
            <div className="w-full flex justify-between p-6">
              <p>{item.title}</p>
              <p
                className={
                  item.replyYn === "true" ? "text-blue-600" : "text-red-600"
                }>
                {item.replyYn === "N" ? "미답변" : "답변완료"}
              </p>
            </div>
            {contentIndex === i && <Answer data={item} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
