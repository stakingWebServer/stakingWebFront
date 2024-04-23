"use client";
import { getPageView } from "@/api/dashboard";
import { useEffect, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

interface ChartData {
  viewName: string;
  pageView: number;
}

export interface PageView {
  viewName: string;
  pageViewDate: string;
  pageView: number;
}

export type Type = "day" | "month";

export default function PageChart({ type }: { type: Type }) {
  const [data, setData] = useState<ChartData[]>([]);

  //차트 데이터
  const getChartData = async () => {
    const result = await getPageView(type);
    let today = new Date().toISOString().split("T")[0];
    if (type === "month") today = today.slice(0, 7); //month는 월까지만 비교

    const now = result.result.filter((item: PageView) => {
      return today === item.pageViewDate;
    });

    setData(now);
  };

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <div>
      <p>페이지별 조회 수({type === "day" ? "일간" : "월간"}) </p>
      <div>
        <BarChart
          width={500}
          height={400}
          data={data}
          margin={{ top: 40, right: 20, left: 20, bottom: 5 }}>
          <XAxis dataKey="viewName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pageView" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}
