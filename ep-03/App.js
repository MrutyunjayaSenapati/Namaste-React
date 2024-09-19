import React from "react";
import ReactDOM from "react-dom/client";
 
const heading=React.createElement("h1", {id:"heading"},"Namaste React");

const newHeading= <h1>Hello World</h1>
const FunComponent=()=>(<h4>Well Come to js </h4>);
    


const HeadingComponent=()=>(
    <div>
        <FunComponent/> {newHeading} {10+2}
    <h1> Namaste react function component </h1>
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(newHeading);
root.render(<HeadingComponent></HeadingComponent>);