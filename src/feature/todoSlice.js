import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"hello World"
    }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    //functions within reducers can be obtained by todoSlice.actions.'reducer-func'
    //for example todoSlice.actions.addTodo 
    reducers:{
        addTodo:(state , action) => {
            //State provides value of initialStage
            //Action is used to update to make change to the state. It also contains whatever data that is being passed to state
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            console.log(state.todos);
        },
        updateTodo:(state , action) => {
            state.todos =  state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        },
        
    }  //contains the functionality of the state/slice . Keys in reducers are called property and any function of a property has 2 arg avaliable called state and action
})

//This is for use in the components to update the inialState
export const {addTodo, removeTodo , updateTodo} = todoSlice.actions

//This is for the store. Every such reducer declared needs to be added to store
// Only these individual slice can make changes to their respective states 
export default todoSlice.reducer