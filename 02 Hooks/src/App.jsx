import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count, setCount] = useState(0)    // Hooks(UI par show krane ke liye use kiya jata hai), jahan jahan par count hoga vahan par value inject ho jayegi or setcount usko new value de rha hai

  const addValue = () => {
    // setCount(count+1)   // value get as bundle of package for count. each line the state is set in 0
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)


    setCount((previousCount) => previousCount+1)  // in setcounter we get a call back function
    setCount((previousCount) => previousCount+1)  // excuting a fun then value of count is update
    setCount(previousCount => previousCount+1)  
    setCount(previousCount => previousCount+1)  
  }

  const removeValue = () => {
    // setCount(count+1)
    setCount(previousCount => previousCount-1)
  }

  return (
    <>
        <h1>chai or code</h1>
        <h2>counter is {count}</h2>

        <button onClick={addValue}>
          Add value {count}
        </button>
        <button onClick={removeValue}>
          Decrease value {count}
        </button>
    </>
  )
}

export default App
