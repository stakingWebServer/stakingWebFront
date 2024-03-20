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
        <div>
            <p className="mb-5">당일 가입 {card.name} 사용자 수</p>
            <div className="flex border-white items-center justify-center mx-10 border border-solid border-black rounded-lg w-48 h-48">
                {data?.todayNum} 명
            </div>
        </div>

    )

}