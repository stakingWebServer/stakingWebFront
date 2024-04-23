"use server";

import { PageView, Type } from "@/components/dashboard/PageChart";
import { API_URL } from "@/utile/env";
import { cookies } from "next/headers";

const theme = cookies().get("token");
const cookie = `Bearer ${theme?.value}` || "";

interface IPageView {
  errorCode: null;
  errorMessage: null;
  message: string;
  result: PageView[];
  statue: string;
}

//각 카드 데이터 가져오기
export default async function getDashboardCardData(card: string) {
  const response = await fetch(`${API_URL}/today/${card}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: cookie,
    },
  });

  return response.json();
}

//페이지별 그래프 값 가져오기
export async function getPageView(type: Type): Promise<IPageView> {
  const response = await fetch(`${API_URL}/page-view/${type}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: cookie,
    },
  });

  return response.json();
}
