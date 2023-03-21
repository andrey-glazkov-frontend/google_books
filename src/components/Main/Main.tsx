/* eslint-disable react/style-prop-object */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Book, BooksState } from '../types/types'

import { NavLink, useParams } from 'react-router-dom'
import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton'

// import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton'

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

  const booksItem = books.length > 0 ? books.map((book) => book.items) : []
  console.log(booksItem)

  const isLoading = useSelector((state: RootState) => state.books.isLoading)
  const error = useSelector((state: RootState) => state.books.error)

  console.log(isLoading)

  return (
    <div>
      {error && <p>{error}</p>}
      <h3>Found {totalItems} results</h3>
      <div className="container" style={{ backgroundColor: 'white' }}>
        <div className="row">
          {booksItem.map((bookList) =>
            bookList.map((book: Book) => (
              <div className="col-md-4 mb-4" key={book.id}>
                <NavLink to={`/detail/${book.id}`}>
                  <div className="card h-100 border-0 card-hover" style={{ backgroundColor: '#F1F1F1', overflow: 'hidden' }}>
                    <div className="card-img-top p-3 position-relative" style={{ textAlign: 'center', height: '300px', overflow: 'hidden' }}>
                      {book.volumeInfo.imageLinks?.thumbnail && <img
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          transition: 'transform .3s ease-in-out'
                        }}
                      />}
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title text-center">{book.volumeInfo.title}</h5>
                        <p className="card-text text-center">{book.volumeInfo.author}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
          )}
        </div>
      </div>
      <LoadMoreButton />
    </div>
  )
}