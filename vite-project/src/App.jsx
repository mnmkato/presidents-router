import './App.css'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
      <h1>Ugandan presidents</h1>
      <Link to='dashboard/leader/1'><button>Click here</button></Link>
    </>
  )
}

export default App
