import './App.css'
import {leaders} from './data.js'
import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
      <h1>Ugandan presidents</h1>
      <ul>
        {leaders.map((leader)=>{
          return <li key={leader.index}>
            <Link to={`leader/${leader.index}`}>{leader.name}</Link>
            </li>
        })}
      </ul>
    </>
  )
}

export default App
