// const heading=React.createElement("h1",{},"Hello React");
// console.log(heading);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent=React.createElement(
    "div",
    {id:"parent"},[
     React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])]);
console.log(parent);
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent  );