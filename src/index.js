import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from "./app-header.";
import SearchPanel from "./search-panel.";
import TodoList from "./todo-list";


const App = () => {
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))
