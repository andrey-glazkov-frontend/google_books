import { useDispatch } from 'react-redux'
import { setCategory, setSort } from '../../redux/slices/sortSlisec'

export function SearchFilters() {
  const dispatch = useDispatch()

  return (
    <div>
      <select onChange={e => dispatch(setCategory(e.target.value))}>
        <option value="all">All</option>
        <option value="art">Art</option>
        <option value="biography">Biography</option>
        <option value="computers">Computers</option>
        <option value="history">History</option>
        <option value="medical">Medical</option>
        <option value="poetry">Poetry</option>
      </select>
      <select onChange={e => dispatch(setSort(e.target.value))}>
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select>
    </div>


  )
}