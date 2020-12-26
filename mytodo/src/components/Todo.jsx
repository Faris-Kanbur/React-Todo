import React from 'react'
import { ACTIONS } from '../ActionTypes';

const Todo = ({todo, dispatch}) => {
    return (
        <div>
            <span style={{background: todo.tamam ?  "#934" : "#147" }}>{todo.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.TODO_COMP, id: todo.id})} >OK</button>
            <button onClick={() => dispatch({type: ACTIONS.TODO_DEL,  id: todo.id})} >DEL</button>
            
        </div>
    )
}

export default Todo;
