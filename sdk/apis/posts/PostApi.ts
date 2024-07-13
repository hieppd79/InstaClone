import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type Post = {
  name: string;
  image: string;
};

export type PostsFetchResult = {
  posts: Post[];
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
          url: `/v1/post_info?code_or_id_or_url=CxYQJO8xuC6&include_insights=true`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
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
