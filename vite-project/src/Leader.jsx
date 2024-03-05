import './App.css'
import {leaders} from './data.js'
import { useParams } from 'react-router'

function Leader() {
  const {index} = useParams();
  const selectedLeader = leaders[index-1];
  return (
    <>
      <img className='leader_photo' src={selectedLeader.image} alt={selectedLeader.name} />
      <h1>{selectedLeader.name}</h1>
      <h2>{selectedLeader.start} - {selectedLeader.end}</h2>
    </>
  )
}

export default Leader
