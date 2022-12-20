import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { api } from './store/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>,
)
