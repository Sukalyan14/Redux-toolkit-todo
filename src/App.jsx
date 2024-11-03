import { useState } from 'react'
import AddTodos from './components/AddTodos'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <Provider store={store}>
      <h1>Learn about redux toolkit</h1>
      <AddTodos />
      <Todos/>
    </Provider>
  )
}

export default App
