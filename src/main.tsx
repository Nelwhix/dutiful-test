import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/custom.css'
import {
    RouterProvider
} from '@tanstack/router'
import router from "./router"
import { Provider } from 'react-redux'
import { store } from './stores'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
