import axios, { AxiosResponse } from "axios";
import {
  SuccessResponse,
} from "./api.types";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 500000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
});

export function getAxiosInstance() {
  return instance;
}

export function isSuccess(response: AxiosResponse<any>) {
  return response.status >= 200 && response.status < 300;
}


export async function post<T>(url: string, data?: any) {
  return instance.post<SuccessResponse<T>>(url, data);
}

export async function addWaitlist(email: string) {
  return post("/waitlist/add", { email });
}

