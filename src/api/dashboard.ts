"use server";

import { API_URL } from "@/utile/env";
import { cookies } from "next/headers";

const theme = cookies().get("token");
const token = `Bearer ${theme?.value}` || "";

//각 카드 데이터 가져오기
export default async function getDashboardCardData(card: string) {
  console.log(theme?.value || "");
  const response = await fetch(`${API_URL}/today/${card}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  return response.json();
}

//페이지별 그래프 값 가져오기
export async function getPageView() {
  const response = await fetch(`${API_URL}/page-view`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  return response.json();
}
