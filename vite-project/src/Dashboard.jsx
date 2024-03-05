import { Link, useParams, Outlet } from 'react-router-dom';
import './App.css'
import {leaders} from './data.js'

function Dashboard() {
  const {index} = useParams();
  const selectedLeader = leaders[index-1];
  return (
    <>
        <div className="dashboard">
            <div className="sidebar">
        <h1><Link to='/'>Ugandan presidents</Link></h1>
        <ul>
        {leaders.map((leader)=>{
          return <li key={leader.index}>
            <Link to={`leader/${leader.index}`}>{leader.name}</Link>
            </li>
        })}
      </ul>
        </div>
      <div className='details'><Outlet /></div>
        </div>
    </>
  )
}

export default Dashboard
