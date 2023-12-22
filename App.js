// <div>
//<div>
// <h1>hello i am nested tag</h1>
// <h1>hello i am nested tag</h1>
// </div>
//<div>
// <h1>hello i am nested tag</h1>
// <h1>hello i am nested tag</h1>
// </div>
// </div>

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "parent2"},  [React.createElement("div", {}, [
    React.createElement("h1", { id: "child1"}, "hello i am nested tag"),
    React.createElement("h2", { id: "child2"}, "hello i h2 am nested tag"),
  ]), React.createElement("div", { id: "parent3"}, [
    React.createElement("h1", { id: "child3"}, "hello i am nested tag"),
    React.createElement("h2", { id: "child4"}, "hello i h2 am nested tag"),
  ])])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading, "heading"); //javascript object
