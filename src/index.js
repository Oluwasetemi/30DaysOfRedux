import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello DevCirclers!</h1>
      <h3>Just Follow the instructions on the Facebook Group </h3>
      <label><input type="checkbox" name="days" checked />  Create a Redux Store </label>
      <label><input type="checkbox" name="days" />  Get State from the Redux Store</label>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
