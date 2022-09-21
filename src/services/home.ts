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
