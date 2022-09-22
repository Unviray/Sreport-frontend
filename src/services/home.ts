import requests from "./requests";

export const getMainBoard = async () => {
  interface IMainBoard {
    title: string;
    number: number;
    publication: number;
    video: number;
    hour: number;
    visit: number;
    study: number;
  }
  [];

  return (await requests.get<IMainBoard[]>("/main-board")).data;
};

export const getReturnedInfo = async () => {
  return (
    await requests.get<{
      total: number;
      returned: number;
      notReturned: number;
    }>("/returned-info")
  ).data;
};

export const getServiceYear = async (id?: number) => {
  return (
    await requests.get<
      {
        month: string;
        publication: number;
        video: number;
        hour: number;
        visit: number;
        study: number;
      }[]
    >("/service-year", {
      params: { id },
    })
  ).data;
};
