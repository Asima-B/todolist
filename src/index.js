import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./app-header.";
import SearchPanel from "./search-panel.";
import TodoList from "./todo-list";


const App = () => {

    const todoData = [
        {label:'Drink Coffee',important:false, id: 1},
        {label:'Implement React Application', important:true,id:2},
        {label: 'Make notes from your stud', important:false, id:3},
        {label: 'Do not drink alcohol', important: false, id:4},
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
