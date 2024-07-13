import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Post} from '../common';

export type PostsFetchResult = {
  data: {
    items: Post[];
  };
  pagination_token: string;
};

export const PostApi = createApi({
  reducerPath: 'post/getPost',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://instagram-scraper-api2.p.rapidapi.com',
  }),
  endpoints: builder => ({
    getPosts: builder.query<PostsFetchResult, void>({
      query: () => {
        return {
          url: `/v1.2/posts?username_or_id_or_url=mrbeast`,
          method: 'GET',
          headers: {
            'x-rapidapi-key':
              '5c40916bc2mshd57afac6970e9a3p15075djsn162f096c2375',
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com',
          },
          credentials: 'omit',
        };
      },
      transformResponse: (
        baseQueryReturnValue: any,
      ): PostsFetchResult | Promise<PostsFetchResult> => {
        //TODO: transform data here
        return baseQueryReturnValue;
      },
    }),
  }),
});

export const {useGetPostsQuery} = PostApi;
