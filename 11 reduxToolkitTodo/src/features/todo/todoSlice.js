import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "hello world"}]
}


// slice = like reducer ka upgrade version. it have some properties which is name, initialstate, reducers, by default it comes in same name as that name
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducers : it is functionality jo properties and fun. leta hai. hm yhi par declare or define bhi yahin kar lete hein not same as context api
    reducers: {
/*         every function have 2 things first is "state" and second is "action"
        state tells what is the current sate of todos and action gives value jo bhi value todos se related hogi vo mein action se lunga
 */        
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,       // payload is a object we can take anything so we can write action.payload.text              
            }
            state.todos.push(todo)      // change the current state
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        
        // updateTodo: (state, action) => {
        //     const {id, newText} = action.payload    //it's a shorthand  way to pull out those properties instead action.payload.id/text
        //     const existingTodo = state.todos.find((todo) => a.id === todoSlice.payload)
        //     if(existingTodo) existingTodo.text = newText
        // }
    }
})

// individually export the reducers ye kisi particular component mein use honge
export const {addTodo, removeTodo} = todoSlice.actions      // all functionality which inside the reducers that is actions   

// store ko bhi reducers ki awarness honi chaheiye
export default todoSlice.reducer