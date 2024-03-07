import { API_URL } from "@/utile/env"



export default async function getDashboardCardData(card: string) {
    const response = await fetch(`${API_URL}/today/${card}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            "Content-Type": "application/json",
            // Authorization: 
        },
    })

    return response.json()
}