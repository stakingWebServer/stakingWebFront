"use client";
import { getPageView } from "@/api/dashboard";
import { useEffect, useState } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

type ChartData = {
    viewName: string;
    pageView: number;
};

export default function PageChart() {
    const [data, setData] = useState<ChartData[]>([]);

    const getChartData = async () => {
        const result = await getPageView();
        setData(result.result);
    };

    useEffect(() => {
        getChartData();
    }, []);

    console.log(data);

    return (
        <div>
            <BarChart
                width={500}
                height={400}
                data={data}
                margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis dataKey="viewName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pageView" fill="#8884d8" />
            </BarChart>
        </div>
    );
}
