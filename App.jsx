import {  useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setjokes] = useState([])
useEffect(() => {
  axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}, []) // <== this makes it run only once when component mounts


  return (
    <>
     <h1>shivshankar sahu you are learning backend</h1>
     <p>JOKES:{jokes.length}</p>
    {
      jokes.map((joke, index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
