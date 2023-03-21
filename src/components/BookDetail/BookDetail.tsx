import { useNavigate, useParams } from 'react-router'
import { booksApi } from '../../helpers/API/API'
import Loader from '../Loader/Loader'

export function BookDetail() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = booksApi.useGetBookByIdQuery(String(id))

  console.log(data)

  if (isLoading) return <Loader />
  
  if (isError) return <div>Something wrong</div>

  if (!data) {
    return null
  }

  return (
    <div className="border bg-light mx-3 my-3 d-flex flex-column align-items-center">
      <div className="d-flex justify-content-between align-items-center mb-3 w-100">
        <button className="btn btn-link text-decoration-none text-dark" onClick={() => navigate('/')}>
          <i className="bi bi-arrow-left"></i> Назад
        </button>
    
      </div>
      <div className="row no-gutters">
        <div className="col-md-3 align-self-center">
          <div className="mx-auto">
            <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-9">
          <div className="p-3 text-center">
            <h5 className="card-title">{data.volumeInfo.title}</h5>
            <p className="card-text">{data.volumeInfo.author}</p>
            <p className="card-text">{data.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
