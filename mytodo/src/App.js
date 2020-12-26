import React, { useState, useReducer } from 'react';
import { ACTIONS } from './ActionTypes';
import Todo from './components/Todo';


const reducer = (todos, actions) => {
  switch (actions.type) {
    case ACTIONS.TODO_ADD:
      return [...todos, newTodoAdd(actions.payload.name)];
  }
};

const newTodoAdd = (name) => {
  return { id: Date.now(), name };
};



function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.TODO_ADD, payload: { name } });
    setName("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </form>

      {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
      )) }
    </div>
  )
}

export default App
