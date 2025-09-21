import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    if(count<20){
      setCount(count+1)
    }

  }
  const remValue=()=>{
    if(count>0){
      setCount(count-1)
    }
 
  }
  return (
    <>
      <h1>chai aur code </h1>
      <p>Counter {count}</p>
      <button onClick={addValue}>Add count</button>
      <button onClick={remValue}>Remove count</button>
      <p>footer {count}</p>
    </>
  )
}

export default App
