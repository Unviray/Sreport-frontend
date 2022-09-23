import { TWorkingMonth } from "@/types/month";
import requests from "./requests";

interface ReportResult {
  id: number;
  preacherId: number;
  month: number;
  year: number;
  publication: number;
  video: number;
  hour: number;
  visit: number;
  study: number;
  note: string;
  Tags: {
    id: number;
    name: string;
    color: string;
  }[];
}

export const apiTags = async () => {
  return (
    await requests.get<{ id: number; name: string; color: string }[]>("/tags")
  ).data;
};

export const apiReturnedService = async (id: number) => {
  return (
    await requests.get<{ label: string; returned: boolean }[]>(
      `/returned-service/${id}`
    )
  ).data;
};

export const apiReport = async (preacherId: number, wm: TWorkingMonth) => {
  return (
    await requests.get<ReportResult | null>(`/report/${preacherId}`, {
      params: wm,
    })
  ).data;
};

export const apiSendReport = async (
  preacherId: number,
  wm: TWorkingMonth,
  report: {
    publication: number;
    video: number;
    hour: number;
    visit: number;
    study: number;
    note: string;
    tagIds: number[];
  }
) => {
  return (
    await requests.post<ReportResult | null>(`/report/${preacherId}`, report, {
      params: wm,
    })
  ).data;
};
