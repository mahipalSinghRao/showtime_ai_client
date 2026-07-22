import axios from "axios"

import { env } from "../env"

export const axiosClient = axios.create({
    baseURL: env.apiBaseUrl,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    timeout: 1000,
})