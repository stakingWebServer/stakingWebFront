import AnswerList from "@/components/inquiryAnswer/AnswerList";
import Nav from "@/components/Nav";

export default function InquiryAnswer() {

    return (
        <div>
            <Nav selectNav={'문의답변'} />
            <AnswerList />
        </div>
    )
}