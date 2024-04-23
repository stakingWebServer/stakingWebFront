"use client";

import getQuestionsList from "@/api/inquiryAnswer";
import { useEffect, useState } from "react";
import Answer from "./Answer";
import { LIST_ODD_STYLE, LIST_STYLE, LIST_TITLE_STYLE } from "../ui/ListStyled";

export interface File {
  fileName: string;
  fileUrl: string;
}

export interface QuestionData {
  questionId: string;
  title: string;
  content: string;
  fileInfos: File[];
  replyYn: string;
  replyContent: string;
  questionCreatedDate: string;
}

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
      <p className={LIST_TITLE_STYLE}>Question List</p>
      <ul>
        {data.map((item, i) => (
          <li
            onClick={() => questionClick(i)}
            key={item.questionId}
            className={`${
              i % 2 !== 0 && LIST_ODD_STYLE
            }  ${LIST_STYLE} cursor-pointer`}>
            <div className="w-full flex justify-between p-6">
              <p className="flex items-end ">
                <span>{item.title}</span>
                <span className="text-xs text-gray-400 mx-1">
                  {item.questionCreatedDate}
                </span>
              </p>
              <p className={`${item.replyYn === "N" && "text-red-600"}`}>
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
