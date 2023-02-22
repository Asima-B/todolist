import React from 'react'
import TodoListItem from "./todo-list-item";

const TodoList = () =>{
    return (
        <ul>
            <li><TodoListItem/></li>
            <li><TodoListItem/></li>
            <li><TodoListItem label ="Drink coffee"/></li>
            <li><TodoListItem label = "Implement React Application"/></li>
            <li><TodoListItem label = "Make notes from your study"/></li>
            <li><TodoListItem label = "Do not drink alcohol"/></li>
        </ul>
    )
}

export default TodoList;