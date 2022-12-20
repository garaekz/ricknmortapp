import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_URL;

export const api = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (page) => `character?page=${page}`,
    }),
  }),
})

export const { useGetCharactersQuery } = api