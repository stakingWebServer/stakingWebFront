'use server'

import { API_URL } from "@/utile/env"
import { cookies } from 'next/headers'

const theme = cookies().get('token');
const cookie = `Bearer ${theme?.value}` || ""

type PushSendData = {
    title: string;
    content: string;
    advertisementPushYn: string;
    alarmDetailKind: string;
}

//단체 push 전송
export default async function pushSend(pushSendData: PushSendData) {
    const response = await fetch(`${API_URL}/pushs`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
            "Authorization": cookie
        },
        body: JSON.stringify(pushSendData)
    })

    return response.json()
}