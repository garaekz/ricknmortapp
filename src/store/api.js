import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_URL;

export const api = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({page, status = '', species = '', type = '', gender = ''}) => {
        return `character?page=${page}&status=${status}&species=${species}&type=${type}&gender=${gender}`
      },
    }),
  }),
})

export const { useGetCharactersQuery } = api