import React, { useState } from 'react';

function TodoList() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    function addTodo() {
        setCount(count + 1);
        const newTodo = {
            id: count,
            text: prompt("Enter your today's work")
        };
        setTodos([...todos, newTodo]);
    }
    

    return (
        <div className='TODO'>
            <h1 className='todo-h1'>TODO List</h1>
            <button className='btn-todo' onClick={addTodo}><h3 className='h3-todo'>Click here to add into your Todo</h3></button>
            <ul className='ul-todo'>
                {todos.map(todo => (
                    <li className='ul-todo' key={todo.id}>{todo.text}</li>                 
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
