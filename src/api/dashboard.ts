'use server'

import { API_URL } from "@/utile/env"
import { cookies } from 'next/headers'

const theme = cookies().get('token')

export default async function getDashboardCardData(card: string) {
    // const theme = cookies().get('token')

    const response = await fetch(`${API_URL}/today/${card}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
            "Authorization": theme?.value || ""
        },
    })

    return response.json()
}

export async function getPageView() {

    const response = await fetch(`${API_URL}/admin/page-view`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
            "Authorization": theme?.value || ""
        },
    })

    return response.json()
}
