//'use server'
import { API_URL } from "@/utile/env"
// import { cookies } from 'next/headers'

type LoginData = {
    loginId: string;
    password: string;
}


export default async function login(loginData: LoginData) {
    const response = await fetch(`${API_URL}/auth`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData)
    })
    // console.log(response.json())
    return response.json()
}

// export const setCookie = (cookie: any) => {
//     cookies().set('token', cookie)

// }