import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Leader from './Leader.jsx'

export default function Router() {

    const myRouter = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: 'leader/:index',
            element: <Leader />
        }
    ])

    return <RouterProvider router={myRouter} />
}
