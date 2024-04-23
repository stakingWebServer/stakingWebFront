"use client";

import Nav from "@/components/Nav";
import PushSendBox from "@/components/pushSend/PushSendBox";
import PushList from "@/components/pushSend/pushList";

import { getPushList } from "@/api/push";
import { useEffect, useState } from "react";

//푸시전송 페이지
export default function PushSend() {
  const [pushList, setPushList] = useState([]);

  const handleGetPushList = async () => {
    const result = await getPushList();
    setPushList(result.result);
  };

  useEffect(() => {
    handleGetPushList();
  }, []);

  return (
    <div>
      <Nav selectNav={"푸시전송"} />
      <div className="flex justify-between h-[700px]">
        <PushList pushList={pushList} />
        <PushSendBox handleGetPushList={handleGetPushList} />
      </div>
    </div>
  );
}
