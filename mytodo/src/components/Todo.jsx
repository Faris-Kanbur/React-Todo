import React from 'react'
import { ACTIONS } from '../ActionTypes';

const Todo = ({todo}) => {
    return (
        <div>
            <span>{todo.name}</span>
        </div>
    )
}

export default Todo;
