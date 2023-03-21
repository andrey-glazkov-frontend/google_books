import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { booksApi } from '../../helpers/API/API'
import { addBooks, deleteBooks, loadMoreBooks, setLoading } from '../../redux/slices/booksSlice'
import { RootState } from '../../redux/store'
import Loader from '../Loader/Loader'

export const LoadMoreButton = () => {
  const dispatch = useDispatch()

  const search = useSelector((state: RootState) => state.search)

  
  const { category, sort, startIndex, limit } = useSelector((state: RootState) => state.sort)

  console.log(limit)

  const startIndexNumber = typeof startIndex === 'number' ? startIndex : 0
  const limitNumber = typeof limit === 'number' ? limit : 0

  const query = {
    query: search,
    category: category,
    sort: sort,
    startIndex: startIndexNumber + 30,
    limit: 30 
  }




  const {data, isLoading, refetch } = booksApi.useGetBooksQuery(query)

  const handleLoadMore = () => {
    dispatch(deleteBooks())
    dispatch(setLoading(true))
    dispatch(loadMoreBooks({ startIndex: startIndexNumber + 30, limit: limitNumber }))
    refetch()
    console.log(data)
    if (data) {
    
      dispatch(addBooks(data))
    }

    if (isLoading) return <Loader />
  }
  return (
    <button onClick={handleLoadMore} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Load more'}
    </button>
  )
}