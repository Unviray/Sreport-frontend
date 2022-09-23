import { TWorkingMonth } from "@/types/month";
import requests from "./requests";

export const getWorkingMonth = async () => {
  return (await requests.get<TWorkingMonth>("/working-month")).data;
};
export const getWorkingMonthPrettie = async (
  format: "long" | "short" = "long"
) => {
  return (
    await requests.get<string>("/working-month-prettie", { params: { format } })
  ).data;
};
export const setWorkingMonth = async (wm: TWorkingMonth) => {
  return (await requests.post<TWorkingMonth>("/working-month", wm)).data;
};
export const getUnprettifyWorkingMonth = async (value: string) => {
  return (
    await requests.get<TWorkingMonth>("/unprettify-working-month", {
      params: { value },
    })
  ).data;
};
