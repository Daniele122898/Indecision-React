console.log("App.js is running");

//JSX
var template = React.createElement("h1", null, "Some p tag");
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
