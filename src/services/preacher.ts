import type { TWorkingMonth } from "@/types/month";
import requests from "./requests";

export const getPreacherList = async (search?: string, tags?: number[]) => {
  return (
    await requests.get<number[]>("/preacher", {
      params: { search, tags: tags?.toString() },
    })
  ).data;
};
export const getPreacher = async (id: number) => {
  return (
    await requests.get<{
      id: number;
      group: number;
      returned: boolean;
      displayName: string;
      fullName: string;
      lastName: string;
      firstName: string;
      phones: string[];
      address: string;
      birth: string;
      baptism: string;
      tags: {
        id: number;
        name: string;
        color: string;
        soon?: {
          start: TWorkingMonth;
          end: TWorkingMonth;
        };
        current?: {
          start: TWorkingMonth;
          end: TWorkingMonth;
        };
      }[];
    }>(`/preacher/${id}`)
  ).data;
};

export const updatePreacher = async (
  id: number,
  value: {
    id?: number;
    group?: number;
    firstname?: string;
    lastname?: string;
    displayname?: string;
    birth?: string | null;
    baptism?: string | null;
    address?: string;
    phones?: string[];
    tagIds?: number[];
    archived?: boolean;
  }
) => {
  return (
    await requests.post<{
      id: number;
      group: number;
      returned: boolean;
      displayName: string;
      fullName: string;
      lastName: string;
      firstName: string;
      phones: string[];
      address: string;
      birth: string;
      baptism: string;
      archived: boolean;
      tags: {
        id: number;
        name: string;
        color: string;
      }[];
    }>(`/preacher/${id}`, value)
  ).data;
};

export const createPreacher = async (
  value: {
    id: number;
    group: number;
    firstname: string;
    lastname: string;
    displayname: string;
    birth?: string | null;
    baptism?: string | null;
    address?: string;
    phones?: string[];
    tagIds?: number[];
    archive?: boolean;
  }
) => {
  return (
    await requests.post<{
      id: number;
      group: number;
      returned: boolean;
      displayName: string;
      fullName: string;
      lastName: string;
      firstName: string;
      phones: string[];
      address: string;
      birth: string;
      baptism: string;
      archive: boolean;
      tags: {
        id: number;
        name: string;
        color: string;
      }[];
    }>(`/preacher/new`, value)
  ).data;
};
