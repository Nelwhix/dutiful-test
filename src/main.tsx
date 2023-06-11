import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/custom.css'
import {
    RouterProvider
} from '@tanstack/router'
import router from "./router"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)