import { API_URL } from "@/utile/env"

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

    return response
}