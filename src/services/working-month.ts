import { TWorkingMonth } from "@/types/month";
import requests from "./requests";

export const getWorkingMonth = async () => {
  return (await requests.get<TWorkingMonth>("/working-month")).data;
};
export const getWorkingMonthPrettie = async () => {
  return (await requests.get<string>("/working-month-prettie")).data;
};
export const setWorkingMonth = async (wm: TWorkingMonth) => {
  return (await requests.post<TWorkingMonth>("/working-month", wm)).data;
};
