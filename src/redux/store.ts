import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { booksApi } from '../helpers/API/API'
import { booksSliceReducer } from './slices/booksSlice'
import { searchSliceReduser } from './slices/searchSlice'
import { sortSliceeReduser } from './slices/sortSlisec'




const rootReducer = combineReducers({
  search: searchSliceReduser,
  sort: sortSliceeReduser,
  books:booksSliceReducer,
  [booksApi.reducerPath]: booksApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [...getDefaultMiddleware(), booksApi.middleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch