import React from 'react'
import ReactDOM from 'react-dom/client'

//JSX - HTML-like or XML-like syntax 
const haed = <h1>Hello Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("h1",{},"Hello I'am Working");

root.render(heading); 
 
//React Functional component
// noraml writting 
const headingComponent = () => {
  return (
    <h1>Namaste React</h1>
  )
}

//writing valid style 1 - for single line
const headingComponent1 = () => <h1>Namaste React</h1>

//writing valid style 2 - for mult lines
const headingComponent2 = () => (
  <h1>
    Namaste React
  </h1>
);