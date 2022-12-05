import React from "react";
import { Counter } from "./components/CounterExample/Counter";
import "./App.scss";
import CircularDeterminate from "./components/CircularDeterminateExample/CircularDeterminate";
import MenuExample from "./components/MenuExample/Menu";

function App() {
  return (
    <div className="App">
      <p>those are just some examples of components just dummy ones for testing purposes </p>
      <Counter></Counter>
      <CircularDeterminate></CircularDeterminate>
      <MenuExample></MenuExample>
    </div>
  );
}

export default App;
