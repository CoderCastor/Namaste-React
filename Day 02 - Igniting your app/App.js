import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));




const heading = React.createElement(
    "h1",
    {
        id: "heading",
        xyz: "abc",
    },
    "Hello World from React!"
);
// root.render(heading);


//creating a nested element 
/*
<div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
    </div>
</div>

*/

const h1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm a h1 tag")
  )
);

// root.render(h1);


//For sibling
const siblings = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", { key:1 }, "I'm a h1 tag"),React.createElement("h2", { key:2 }, "I'm a h2 tag")]
    )
  );
// root.render(siblings);



//For more complex structure
const complexStructure = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: 1 }, [
    React.createElement("h1", { key: 1 }, "I'm a h1 tag"),
    React.createElement("h2", { key: 2 }, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child", key: 2 }, [
    React.createElement("h1", { key: 1 }, "I'm a h1 tag"),
    React.createElement("h2", { key: 2 }, "I'm a h2 tag"),
  ]),
]);
root.render(complexStructure);