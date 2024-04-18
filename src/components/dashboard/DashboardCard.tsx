"use client";
import getDashboardCardData from "@/api/dashboard";
import { useEffect, useState } from "react";

type Props = {
  card: {
    name: string;
    params: string;
  };
};

type CardData = null | { todayNum: number };

export default function DashboardCard({ card }: Props) {
  const [data, setData] = useState<CardData>(null);

  const getCardData = async () => {
    const result = await getDashboardCardData(card.params);
    setData(result.result);
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <div className="bg-slate-100 p-10 mx-3 rounded-lg">
      <p className="mb-10">
        당일 <span className="text-violet-700 font-bold	">{card.name}</span>
        사용자 수
      </p>
      <div className="flex items-center justify-center rounded-lg w-60">
        <span className="text-violet-400 mx-2 text-5xl">{data?.todayNum}</span>
        <span>명</span>
      </div>
    </div>
  );
}
