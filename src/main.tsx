import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/custom.css'
import { RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './stores'
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layouts/layout";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Login from "./pages/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
