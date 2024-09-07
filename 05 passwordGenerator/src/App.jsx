import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumber] = useState(false)
  const [charAllowed, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  // useCallback(memoization) hook( function, dependencies )
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "012345679"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])   // this dependencies is for optimization of function. dependencies ki prev.last value ko cache mein rkhna jb tk dependencies mein change nhi ho jata jisse ki fun recalculate nhi hoga.

  useEffect( () => {      // when page is reload then it calls
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])  // age inme se kisi mein bhi ched chad hoti hai to fun load hoga

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();  //manually select  // through it copy heading reflect
    window.navigator.clipboard.writeText(password)      // throogh it data will copy
  }, [password])

  return (
    <div className='bg-gray-700 mx-auto my-10 py-2 px-4 w-full max-w-lg rounded-lg text-orange-500'>
      <h1 className='text-center text-white my-3 text-xl'>Password Generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-10 mt-5">
        <input 
        className="w-full py-2 px-4 outline-none"
        placeholder="password"
        type="text" 
        value={password}
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className="bg-blue-500 p-2 outline-none shrink-0 text-white">copy</button>
      </div>

      <div className="flex gap-x-8">
        <div className="flex items-center gap-x-2 accent-cyan-400 ">
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={ (e) => {setLength(e.target.value)
          //   console.log(e.target);
          // console.log(e.target.value);
          }}

          />
          <label>Length: {length} </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked = {numberAllowed}
          id="numberInput"
          onChange={ () => {
            setNumber((prev) => !prev);
          } }

          />
          <label htmlFor="numberInput">Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
          type="checkbox" 
          defaultChecked = {charAllowed}
          id = 'charInput'
          onChange={ () => {
            setChar((prev) => !prev)
          }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
