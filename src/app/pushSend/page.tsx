import Nav from "@/components/Nav";
import PushSendBox from "@/components/PushSendBox";

//푸시전송 페이지 
export default function PushSend() {
    return (
        <div>
            <Nav selectNav={'푸시전송'} />
            <PushSendBox />
        </div>
    )
}