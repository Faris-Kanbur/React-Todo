import React, { useState, useReducer } from 'react';
import { ACTIONS } from './ActionTypes';
import Todo from './components/Todo';


const reducer = (todos, actions) => {
  switch (actions.type) {
    case ACTIONS.TODO_ADD:
      return [...todos, newTodoAdd(actions.payload.name)];

    case ACTIONS.TODO_COMP:
      return todos.map((todo)=>{
        if (todo.id === actions.id) {
          return{...todo, tamam: !todo.tamam}
      }
      return {...todo};
  });
  case ACTIONS.TODO_DEL:
    return todos.filter((todo) => todo.id !== actions.id);

  default: 
    return todos;

}
};

const newTodoAdd = (name) => {
  return { id: Date.now(), name, tamam: false };
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
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      )) }
    </div>
  )
}

export default App
