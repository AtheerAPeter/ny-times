import request from '.';
import {IResponse} from '../@types';

export const nyTimesApi = {
  search: {
    key: 'search',
    exec: (query: string, page: number = 0): Promise<{data: IResponse}> =>
      request.get(`/svc/search/v2/articlesearch.json?q=${query}&page=${page}`),
  },
};
