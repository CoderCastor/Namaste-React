import React from 'react'
import ReactDOM from 'react-dom/client'

//JSX - HTML-like or XML-like syntax 
const haed = <h1>Hello Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("h1",{},"Hello I'am Working");

// root.render(heading); 
 
//React Functional component
// noraml writting best from akshay sir
const HeadingComponent = () => {
  return (
    <h1>Namaste React</h1>
  )
}

//writing valid style 1 - for single line
const HeadingComponent1 = () => <h1>Namaste React</h1>

//writing valid style 2 - for mult lines
const HeadingComponent2 = () => (
  <h1>
    Namaste React
  </h1>
);

//nested tags
const HeadingComponent3 = () => (
  <div className='parent'>
    <div className='child'>
      <h1>Namaste React</h1>
    </div>
  </div>
);

//React Element vs React components
const reactElement = (
  <div className='parent'>
    <div className='child'>
      <h1>Namaste React</h1>
    </div>
  </div>
);

const ReactComponents = () => (
  <div className='parent'>
    <div className='child'>
      <h1>Namaste React</h1>
    </div>
  </div>
);

// root.render(ReactComponents) //It is valid for ReactElements only, not valid for ReactComponents babel understands <ReactComponents/>
// root.render(<ReactComponents/>)

//Components Compositions
const Title = () => <h1>This is title Component</h1>

const Mainheading = () => {
  return (
    <div>
      <Title/>
      <h1>Namaste React</h1>
    </div>
  )
}

root.render(<Mainheading/>);