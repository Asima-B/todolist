import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = ()=>{
    const items = ['Install React Project','Step 1 Step 1 Project','Install React Project'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
        </ul>
    );
}

const AppHeader = ()=>{
    return <h1>My Todo List</h1>;
}

const SearchPanel = () =>
{
    const searchText = 'Type your text here';
    const searchStyle = {
        fontSize:'20px'
    };

    return <input style={searchStyle}
                  placeholder={searchText} disabled = {true}/>
    // return <input placeholder={"search"}/>;
}

const App = () => {
    const value = '<script>alert("")</script>'
    return(
        <div>
            {value}
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
        );
}

ReactDOM.render(<App/>,document.getElementById("root"))
