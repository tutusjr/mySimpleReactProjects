import { useReducer } from "react";
import "./App.css";
import React from "react";
import Calculate from "./Calculate";

const initialValue = 0;

export const NumberContext = React.createContext();

const reducer = (state, action) => {
  switch (action) {
    case "arttir":
      return state + 1;
    case "azalt":
      return state - 1;
    case "sifirla":
      return initialValue;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <NumberContext.Provider values={{count, dispatch}}>
        <Calculate />
      </NumberContext.Provider>
    </>
  );
}

export default App;
