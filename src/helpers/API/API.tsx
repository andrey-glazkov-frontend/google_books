
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Book, BooksQueryResponse, SearchState } from '../../components/types/types'
const GOOGLE_BOOKS_API_KEY = 'AIzaSyB9gb1WKprMdCNNVlObQuZst7tQ_qaCpcU'




export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1' }),
  endpoints: (builder) => ({
    getBooks: builder.query<BooksQueryResponse, {
      query: SearchState;
      category: string;
      sort: string;
      startIndex: number;
      limit: number;
    }>({
      query: ({ query, category, sort, startIndex = 0, limit =30 }) => {
        const encodedQuery = query.query
        const encodedCategory = encodeURIComponent(category !== 'all' ? `+subject:${category}` : '')
        const url = `volumes?q=${encodedQuery}${encodedCategory}&orderBy=${sort}&startIndex=${startIndex}&maxResults=${limit}&key=${GOOGLE_BOOKS_API_KEY}`
        return {
          url
        }
      }
    }),
    getBookById: builder.query<Book, string>({
      query: (id: string) => {
        const url = `volumes/${id}?key=${GOOGLE_BOOKS_API_KEY}`
        return {
          url
        }
      }
    })
  })
})

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi