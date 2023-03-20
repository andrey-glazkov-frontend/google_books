import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BookState } from '../../components/types/types'


const initialState: BookState = {
  category: 'all',
  sort: 'relevance'
}

export const sortSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setCategory, setSort } = sortSlice.actions

export const sortSliceeReduser = sortSlice.reducer