import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import { TodoForm, TodoItem } from './components';

function App() {
const [todos, setTodos] = useState([]);   // todos ek array hai jisme saare todos objects hein

const addTodo = (todo) => {
  // console.log(todo);
  setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos] )   // prevTodos mein pichle saare objects ka array hoga
}

const updateTodo = (id, todo) => {
  setTodos((prevTodos) => prevTodos.map((eachTodo) => ( eachTodo.id === id ? todo : eachTodo )) )
}

const deleteTodo = (id) => {
  setTodos((prevTodos) => prevTodos.filter((Todo) => Todo.id !== id))
}

const toggleComplete = (id) => {
  setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? {...todo, completed : !todo.completed} : todo ))) //note: map ke throgh jo bhi todo mil rha hai vo ek object mil rha hoga kuki hmne object bnaya hai
}

// we we reload the page, previous todos keep as it is(means: data is stored in storage ) for that we use 'useEffect'
useEffect(() => {     // localStorage broweser ka storage hai
  const todos = JSON.parse(localStorage.getItem("todos" ))   // we get the value in the string format so need to convert it and remember - .getItem(key)

  if(todos && todos.length > 0) {   // todos ek object or array bhi ho skta hai
    setTodos(todos)
  }
}, [])


useEffect(() => {
localStorage.setItem("todos", JSON.stringify(todos))    // store in the format of string
}, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map( (todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo = {todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
