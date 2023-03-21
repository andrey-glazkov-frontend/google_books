import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book, BooksState } from '../../components/types/types'

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: null,
  startIndex: 0
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<{ items: Book[]; totalItems: number }>) => {
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
    deleteBooks: (state) => {
      state.books = []
    },
    loadMoreBooks: (state, action: PayloadAction<{ startIndex: number; limit: number }>) => {
      state.startIndex = action.payload.startIndex
    }
  }
})

export const { addBooks, setLoading, setError, deleteBooks, loadMoreBooks } = booksSlice.actions

export const booksSliceReducer= booksSlice.reducer