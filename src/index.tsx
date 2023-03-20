import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { BookDetail } from './components/BookDetail/BookDetail'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Main } from './components/Main/Main'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      {
        path: '/detail/:id',
        element: <BookDetail />
      }
    ]
  }

])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)


