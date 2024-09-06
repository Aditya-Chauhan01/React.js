import { useState } from "react"


function App() {
const [color, setColor] = useState("black")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      {/* <div className="bg-black fixed flex flex-wrap justify-center bottom-12 inset-x-0 "> */}
        <div className='mx-80 fixed bottom-12 inset-x-0 bg-white flex flex-wrap justify-center gap-8 py-3 rounded-3xl'>
          <button onClick={() => setColor("red")}
          className="px-5 py-2 rounded-full text-white shadow-xl" style={{backgroundColor: "red"}}>
            Red
          </button>
          <button onClick={() => setColor("green")}
          className=" px-5 rounded-full text-white shadow-xl" style={{backgroundColor: "green"}}>
            Green
          </button>
          <button onClick={() => setColor("blue")}
          className=" px-4  rounded-full text-white shadow-xl" style={{backgroundColor: "blue"}}>
            Blue
          </button>
          <button onClick={() => setColor("violet")}
          className=" px-4 rounded-full text-white shadow-xl" style={{backgroundColor: "violet"}}>
            violet
          </button>
        </div>
      {/* </div> */}
    </div>
  )
}

export default App
