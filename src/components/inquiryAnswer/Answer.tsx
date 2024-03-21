import Button from "../ui/Button";
import AnswerModal from "./AnswerModal";
import ImgModal from "./ImgModal";
import Image from "next/image";
import { useState } from "react";
import { QuestionData, File } from "./AnswerList";



export type ImgModalData = File | null;

const textareaCss = 'w-full border border-slide p-3'

export default function Answer({ data }: { data: QuestionData }) {
    const [imgModalData, setimgModalData] = useState<ImgModalData>(null) //모달창에 띄울 img 데이터
    const [answerModalId, setAnswerModalId] = useState<string | null>(null);

    return (
        <>
            <div className="bg-white m-1 p-6 w-full">
                <textarea className={`${textareaCss} h-[150px]`} value={data.content} readOnly />
                <div className="flex justify-end">
                    {data.fileInfos.map((item) =>
                        <Image
                            className="m-1"
                            key={item.fileUrl}
                            width={60}
                            height={60}
                            src={item.fileUrl}
                            alt={item.fileName}
                            onClick={(e) => {
                                e.stopPropagation();
                                setimgModalData(item);
                            }}
                        />
                    )}
                </div>
                {data.replyYn === 'N' ?
                    <Button
                        text={"답변등록"}
                        size={200}
                        onClick={(e: { stopPropagation: () => void; }) => {
                            e.stopPropagation();
                            setAnswerModalId(data.questionId)
                        }}
                    />
                    : <textarea className={`${textareaCss} h-[100px]`} value={data.replyContent} readOnly />}
            </div>
            {imgModalData && <ImgModal imgData={imgModalData} setModal={setimgModalData} />}
            {answerModalId && <AnswerModal id={answerModalId} setModal={setAnswerModalId} />}
        </>


    )
}