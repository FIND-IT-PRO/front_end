import React from "react";
import { Counter } from "./components/CounterExample/Counter";
import "./App.scss";
import CircularDeterminate from "./components/CircularDeterminateExample/CircularDeterminate";
import MenuExample from "./components/MenuExample/Menu";
import Login from "./components/UserComponent/Login";

import {
  Route,
  Routes,
} from 'react-router-dom';
import Welcome from "./components/UserComponent/Welcome";
import Home from "./components/Home";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    );
  }


export default App;
