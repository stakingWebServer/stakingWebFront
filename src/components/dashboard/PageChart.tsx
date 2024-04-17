"use client";
import { getPageView } from "@/api/dashboard";
import { useEffect, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

interface ChartData {
  viewName: string;
  pageView: number;
}

export type Type = "day" | "month";

export default function PageChart({ type }: { type: Type }) {
  const [data, setData] = useState<ChartData[]>([]);

  console.log("type", type);

  const getChartData = async () => {
    const result = await getPageView(type);
    setData(result.result);
  };

  console.log(data);

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
