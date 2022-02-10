import {useState} from 'react';
import {useInfiniteQuery} from 'react-query';
import {Doc} from '../@types';
import {nyTimesApi} from '../api/nyTimesApi';

export const useNyTimes = () => {
  const [query, setQuery] = useState<string>('News');
  const dependencies = {
    query,
  };
  const {
    data,
    isLoading: isSearching,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    [nyTimesApi.search.key, dependencies.query],
    ({pageParam = 0}) => {
      return nyTimesApi.search.exec(query, pageParam);
    },
    {
      keepPreviousData: false,
      // bug in react query
      select: res =>
        res.pages.reduce(
          (prev, cur) => prev.concat(cur.data.response.docs),
          [],
        ) as any,

      getNextPageParam: (lastPage, allpages) => {
        if (lastPage.data.response.docs.length === 10) {
          return allpages.length;
        }
        return null;
      },
    },
  );

  const onSearch = (q: string) => setQuery(q);

  const fetchNext = () => {
    if (isFetchingNextPage) {
      return;
    }
    fetchNextPage();
  };

  return {
    isSearching,
    onSearch,
    data: data as unknown as Doc[],
    fetchNext,
    isFetchingNextPage,
  };
};
