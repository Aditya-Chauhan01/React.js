import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    name : "aditya",
    age: 14 
  }
  let newArr = [1,2]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind Css</h1>
      <Card username = "Aditya" btnText = "visti me" />      // the value of propes give from here. we can pass an object and also an array
      <Card username = "queen" btnText = "click me" />
      <Card username = "queen"  />
    </>
  )
}

export default App
