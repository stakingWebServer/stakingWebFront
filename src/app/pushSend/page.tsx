import Nav from "@/components/Nav";
import PushSendBox from "@/components/pushSend/PushSendBox";
import PushList from "@/components/pushSend/pushList";

//푸시전송 페이지
export default function PushSend() {
  return (
    <div>
      <Nav selectNav={"푸시전송"} />
      <PushList />
      <PushSendBox />
    </div>
  );
}
