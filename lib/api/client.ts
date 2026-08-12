import axios from "axios";
import { env } from "../env";

export const apiClient = axios.create({
    baseURL: env.apiBaseUrl,
    timeout: 120000,
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})