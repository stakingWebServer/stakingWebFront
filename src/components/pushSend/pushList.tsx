"use client";

import { getPushList } from "@/api/push";
import { useEffect, useState } from "react";
import { LIST_ODD_STYLE, LIST_STYLE, LIST_TITLE_STYLE } from "../ui/ListStyled";

interface pushList {
  pushTitle: string;
  pushContent: string;
  createDatetime: string;
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

  return (
    <div className="w-[52%] h-[100%] overflow-auto">
      <p className={LIST_TITLE_STYLE}>History</p>
      <ul>
        {list?.map((item: pushList, i) => (
          <li
            key={item.pushTitle}
            className={`${
              i % 2 !== 0 && LIST_ODD_STYLE
            } ${LIST_STYLE} justify-between p-4 items-end`}>
            <div>
              <p className="pb-2 font-semibold text-black">{item.pushTitle}</p>
              <p>{item.pushContent}</p>
            </div>
            <p className="text-sm	">{item.createDatetime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
