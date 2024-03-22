'use client'
import { answerReply } from "@/api/inquiryAnswer";
import { SetStateAction, useState } from "react";
import Button from "../ui/Button";
import { ModalBackCss } from "../ui/Modal";
import TextareaBox from "../ui/TextareaBox";

type Props = {
    id: string;
    setModal: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function AnswerModal({ id, setModal }: Props) {
    const [answerData, setAnswerData] = useState<string>('');

    const handleAnswer = async () => {
        if (answerData === null) return
        const result = await answerReply({
            content: answerData,
            questionId: id
        });

        if (result.status !== 'FAIL') {
            alert('답변을 등록했습니다.');
            setModal(null)
        } else {
            alert(result.errorMessage)
        }
    }

    return (
        <div className={ModalBackCss}>
            <div className="bg-white w-[450px] h-[480px] p-3 m-auto mt-[12%]">
                <div className="flex justify-between p-3">
                    <span>답변등록</span>
                    <span className="cursor-point" onClick={() => setModal(null)}>X</span>
                </div>
                <TextareaBox text="" id="content" value={answerData} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setAnswerData(e.target.value)} />
                <div className="text-center">
                    <Button text="답변등록" size={400} onClick={handleAnswer} />
                </div>

            </div>
        </div>
    )
}