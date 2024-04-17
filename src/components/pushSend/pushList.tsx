"use client";

import { getPushList } from "@/api/push";
import { useEffect, useState } from "react";

interface pushList {
  pushTitle: string;
  pushContent: string;
}

export default function PushList() {
  const [list, setList] = useState([]);

  const handleGetPushList = async () => {
    const result = await getPushList();
    setList(result.result);
  };

  useEffect(() => {
    handleGetPushList();
  }, []);

  console.log(list);

  return (
    <div>
      {list?.map((item: pushList) => (
        <li>
          <p>{item.pushTitle}</p>
          <p>{item.pushContent}</p>
        </li>
      ))}
    </div>
  );
}
