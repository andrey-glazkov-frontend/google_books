import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addBooks, setError, setLoading } from '../../redux/slices/booksSlice'
import { RootState } from '../../redux/store'
import { Book, BooksQueryResponse, BooksState } from '../types/types'

export function Main() {

  const { books } = useSelector<RootState, BooksState>((state) => state.books)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    if (books.length > 0) {
      setTotalItems(books[0].totalItems)
    } else {
      setTotalItems(0)
    }
  }, [books])

  const booksItem = books.map((book) => book.items)

  console.log(booksItem)

  const isLoading = useSelector((state: RootState) => state.books.isLoading)
  const error = useSelector((state: RootState) => state.books.error)


  // const handleLoadMore = () => {
  //   dispatch(setLoading(true));

  //   // здесь выполните запрос на получение следующих 30 результатов и вызовите addBooks с полученными данными
  //   // например, используя fetch и передавая смещение:
  //   const offset = books.length;
  //   fetch(`https://api.example.com/books?limit=30&offset=${offset}`)
  //     .then((response) => response.json())
  //     .then((data: BooksQueryResponse) => {
  //       dispatch(addBooks(data));
  //       dispatch(setLoading(false));
  //     })
  //     .catch((error) => {
  //       dispatch(setError(error.message));
  //       dispatch(setLoading(false));
  //     });
  // };


  return (

    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h3>Found {totalItems} results</h3>
      <div>
        {booksItem.map((bookList) => (
          bookList.map((book: Book) => (
       
            <div className="card" key={book.id}>
              <img className="card-img-top" src={book.volumeInfo.imageLinks.thumbnail} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{book.volumeInfo.title}</h5>
                <p className="card-text">{book.volumeInfo.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))
        ))}

      
      </div>
    </div>
  )
}