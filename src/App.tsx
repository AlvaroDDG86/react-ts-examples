import { useState } from "react";
import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";

import "./App.css";

function App() {

  return (
    <div className="App">
      <h1>React + typescript</h1>
      <p>
        <a
          href="https://github.com/typescript-cheatsheets/react"
          target="_blanck"
        >
          Cheatsheet
        </a>
      </p>
      <div>
        <h2>useState</h2>
        <UseStateComponent />
        <hr />
      </div>
      <div>
        <h2>useState</h2>
        <UseEffectComponent />
        <hr />
      </div>
      <div>
        <h2>useContext</h2>
        <UseContextComponent />
        <hr />
      </div>
      <div>
        <h2>useReducer</h2>
        <UseReducerComponent />
        <hr />
      </div>
      <div>
        <h2>useRef</h2>
        <UseRefComponent />
        <hr />
      </div>
    </div>
  );
}

export default App;
