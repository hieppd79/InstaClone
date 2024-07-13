import {useState, useEffect} from 'react';
import {Post, useGetPostsQuery, PostFetchParams} from '../../../sdk/apis';

export const useInfinityPost = ({userName}: PostFetchParams) => {
  const [data, setData] = useState<Post[]>([]);
  const [paginationToken, setPaginationToken] = useState<string | undefined>(
    '',
  );

  const {
    data: response,
    isLoading,
    refetch,
    isFetching,
    error,
  } = useGetPostsQuery({userName: userName, paginationToken: paginationToken});

  useEffect(() => {
    if (response) {
      setData(prevData => [...prevData, ...response.data.items]);
    }
  }, [response]);

  const loadMore = () => {
    if (!isFetching && response && response.data.items.length > 0) {
      setPaginationToken(response.pagination_token);
    }
  };
  return {data, error, isLoading, isFetching, loadMore, refetch};
};
