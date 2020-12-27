import React, {useState } from 'react'
import "./App.css";

import Form from "./components/Form";
import TodoList from './components/TodoList';



const App = () => {
  const [inputText, setInputText] = useState("");
  
  return (
    <div className ="App">
      <header>
        <h1>Faris' Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  )
}


export default App