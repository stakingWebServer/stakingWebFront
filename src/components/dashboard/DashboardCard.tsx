'use client'
import getDashboardCardData from "@/api/dashboard";
import { useEffect, useState } from "react";

type Props = {
    card: {
        name: string;
        params: string;
    };
}

type CardData = null | { todayNum: number; }

export default function DashboardCard({ card }: Props) {
    const [data, setData] = useState<CardData>(null);

    const getCardData = async () => {
        const result = await getDashboardCardData(card.params);
        setData(result.result);
    }

    useEffect(() => {
        getCardData();
    }, [])

    return (
        <div className="bg-blue-100 p-10 m-3 rounded-lg">
            <p className="mb-10">당일 가입 {card.name} 사용자 수</p>
            <div className="flex border-white items-center justify-center border border-solid border-black rounded-lg w-60 h-48">
                {data?.todayNum} 명
            </div>
        </div>

    )

}