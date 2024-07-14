import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {User} from '../common';

export type SearchResult = {
  data: {
    users: User[];
  };
};

export type SearchParams = {
  userName: string;
};

export const SearchApi = createApi({
  reducerPath: 'user/searchUser',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://instagram-scraper-api2.p.rapidapi.com',
  }),
  endpoints: builder => ({
    searchUser: builder.query<SearchResult, SearchParams>({
      query: ({userName}) => {
        let queryString = `/v1/search?search_query=${userName}`;
        return {
          url: queryString,
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
      ): SearchResult | Promise<SearchResult> => {
        //TODO: transform data here
        return baseQueryReturnValue;
      },
    }),
  }),
});

export const {useLazySearchUserQuery} = SearchApi;
