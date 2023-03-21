import { useDispatch } from 'react-redux'
import { setCategory, setSort } from '../../redux/slices/sortSlisec'

export function SearchFilters() {
  const dispatch = useDispatch()

  return (
    <div className="d-flex justify-content-center align-items-center mt-4 mb-4"> 
      <select className="form-select me-3 w-auto" onChange={e => dispatch(setCategory(e.target.value))}> 
        <option value="all">All</option> 
        <option value="art">Art</option> 
        <option value="biography">Biography</option> 
        <option value="computers">Computers</option>
        <option value="history">History</option> 
        <option value="medical">Medical</option> 
        <option value="poetry">Poetry</option> 
      </select> 
      <select className="form-select w-auto" onChange={e => dispatch(setSort(e.target.value))}> 
        <option value="relevance">Relevance</option> 
        <option value="newest">Newest</option> 
      </select> 
    </div>
  )
}