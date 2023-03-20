import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SearchState } from '../../components/types/types'

const initialState: SearchState = {
  query: ''
}
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<SearchState>) => {
      state.query = action.payload.query
    }
  }
}
)
export const { setQuery } = searchSlice.actions
export const searchSliceReduser = searchSlice.reducer