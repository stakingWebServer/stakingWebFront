'use client'
import { getPageView } from "@/api/dashboard"
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const test = [
    {
        "viewName": "HOME",
        "pageView": 194
    },
    {
        "viewName": "MYSTAKE",
        "pageView": 66
    },
    {
        "viewName": "MYPAGE",
        "pageView": 97
    }
]

export default function PageChart() {
    const [data, setData] = useState(null);

    const getChartData = async () => {
        const data = await getPageView();
        setData(data);
    }

    useEffect(() => {
        getChartData();
    }, [])

    return (
        <div className="bg-gray-200 rounded-lg py-5 my-5">
            <BarChart width={500} height={400} data={test}
                margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis dataKey="viewName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pageView" fill="#8884d8" />
            </BarChart>
        </div>
    )

}