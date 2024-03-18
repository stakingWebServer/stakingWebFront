'use server'

import { API_URL } from "@/utile/env"
import axios from "axios";
import { cookies } from 'next/headers'

const theme = cookies().get('token')

const request = axios.create({
    headers: {
        accept: 'application/json',
        Authorization: theme?.value || "",
    },
});

request.interceptors.request.use((config) => {
    config.baseURL = API_URL;
    return config
})

export default async function getDashboardCardData(card: string) {

    const theme = cookies().get('token')


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
