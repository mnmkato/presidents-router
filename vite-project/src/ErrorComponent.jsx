import './App.css'
import { useRouteError, Link } from 'react-router-dom'

export default function ErrorComponent() {
    const error = useRouteError();

    return(<>
        <h1>Oops!</h1>
        <p>An error occured</p>
        <p>{error.statusText || error.message}</p>
        <Link to='/'><button>Back to home</button></Link>
        </>)
}