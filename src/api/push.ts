import { API_URL } from "@/utile/env"
import { cookies } from 'next/headers'

const theme = cookies().get('token')

// //단체 push 전송
// export default async function pushSend(pushSendData) {
//     const response = await fetch(`${API_URL}/pushs`, {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'no-cache',
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": theme?.value || ""
//         },
//         body: JSON.stringify(pushSendData)
//     })

//     return response.json()
// }