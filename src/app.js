console.log("App.js is running");

let app = {
  title: "Indecision",
  subtitle: "Put your life in the hands of a computer"
};

function getLocation(location) {
  if(location) {
    return <p>Location: {user.location}</p>;
  }
}

let user = {
  location: "Italy",
  name: "Dani",
  age: 20
};

let template =(
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <p>User: {user.name ? user.name: "Anonymous"}</p>
    {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
