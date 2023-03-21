import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { booksApi } from '../../helpers/API/API'
import { addBooks, deleteBooks, setLoading } from '../../redux/slices/booksSlice'
import { setQuery } from '../../redux/slices/searchSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import Loader from '../Loader/Loader'

export function SearchBar() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const [input, setInput] = useState(() => {
    const q = searchParams.get('q')
    return q || ''
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setQuery({ query: input }))
    setSearchParams({ q: input })
  }, [input, dispatch, setSearchParams])

  const search = useSelector((state: RootState) => state.search)
  const { category, sort } = useSelector((state: RootState) => state.sort)

  const { data, isLoading, isError } = booksApi.useGetBooksQuery({
    query: search,
    category: category,
    sort: sort,
    startIndex: 0,
    limit: 30
  })



  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      navigate('/')
      dispatch(deleteBooks())
      dispatch(setLoading(true))
      if (data) {
        dispatch(addBooks(data))
        dispatch(setLoading(false))

      }
    }
  }

  if (isLoading) return <Loader />
  if (isError) return <div>Somthing wrong</div>


  return (
    <input type="text" value={input} onChange={searchHandler} onKeyPress={handleKeyPress} placeholder="Search" className="form-control w-25 mx-auto" id="floatingInput" />
  )
}