import React from 'react'
import ReactDOM from 'react-dom/client'

//JSX - HTML-like or XML-like syntax 
const haed = <h1>Hello Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("h1",{},"Hello I'am Working");

root.render(heading); 

