'use server'

import { API_URL } from '@/utile/env';
import { cookies } from 'next/headers'

const theme = cookies().get('token');
const cookie = `Bearer ${theme?.value}` || ""


//문의목록 조회
export default async function getQuestionsList() {
    const response = await fetch(`${API_URL}/questions`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
            "Authorization": cookie
        },
    })

    return response.json()
}