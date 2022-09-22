import requests from "./requests";

export const getPreacherList = async (search?: string) => {
  return (await requests.get<number[]>("/preacher", { params: { search } }))
    .data;
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
      }[];
    }>(`/preacher/${id}`)
  ).data;
};
