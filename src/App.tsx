import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoContainer} from "./components/todo/todoContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
