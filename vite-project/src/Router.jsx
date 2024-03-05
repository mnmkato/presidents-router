import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Leader from './Leader.jsx'
import Dashboard from './Dashboard.jsx'
import ErrorComponent from './ErrorComponent.jsx'

export default function Router() {

    const myRouter = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement:<ErrorComponent />
        },
        {
            path: 'dashboard/',
            element: <Dashboard />,
            errorElement:<ErrorComponent />,
            children:[
                {
                    path: 'leader/:index',
                    element: <Leader />
                },
            ]
        }
    ])

    return <RouterProvider router={myRouter} />
}
