import axios from 'axios';

export type Request = {
  url: string;
  query?: any;
};

export const APIService = async ({url, query}: Request) => {
  return axios.get(url, {
    params: {...query},
  });
};
