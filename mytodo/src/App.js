import React, {useState, useReducer} from 'react';
import { ACTIONS } from './ActionTypes';


const reducer = {state, action} = ();





const App = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  const [ name, setName] = useState("");


  const handleSubmit = () =>{
    dispatch({ type: ACTIONS.TODO_ADD });
  };

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e = setName(e.target.value)} />
        </form>
    </div>
  )
}

export default App
