import requests from "./requests";

export const apiTags = async () => {
  return (
    await requests.get<{ id: number; name: string; color: string }[]>("/tags")
  ).data;
};
