import React from 'react'
import ReactDOM from 'react-dom'

const elem = (
    <div>
        <h1>My Todo list</h1>
        <input placeholder={"search"}/>
        <ul>
            <li>Install React Project</li>
            <li>Step 1 Project</li>
            <li>Install React PRoject</li>
        </ul>
    </div>
);

ReactDOM.render(elem, document.getElementById("root"))
