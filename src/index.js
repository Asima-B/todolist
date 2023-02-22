import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./app-header.";
import SearchPanel from "./search-panel.";
import TodoList from "./todo-list";


const App = () => {

    const todoData = [
        {label:'Drink Coffee',important:false},
        {label:'Implement React Application', important:true},
        {label: 'Make notes from your stud', important:false},
        {label: 'Do not drink alcohol', important: false},
    ];

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos = {todoData}/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))
