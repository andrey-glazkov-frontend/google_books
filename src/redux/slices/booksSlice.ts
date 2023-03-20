import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book, BooksState } from '../../components/types/types'

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: null
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state: BooksState, action: PayloadAction<{ items: Book[], totalItems: number }>) => {
      const newBooksQueryResponse = {
        items: action.payload.items,
        totalItems: action.payload.totalItems
      }

      if (!state.books.some((booksQueryResponse) => booksQueryResponse.totalItems === newBooksQueryResponse.totalItems)) {
        state.books.push(newBooksQueryResponse)
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    deleteBooks: (state: BooksState) => {
      state.books = []
    }
  }
})

export const { addBooks, setLoading, setError, deleteBooks } = booksSlice.actions

export const booksSliceReducer = booksSlice.reducer