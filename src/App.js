import React from "react";
// import "./styles.css";
import Count from "./Count";
import { increment, decrement } from "./Redux/getAllProducts/actions/count.action";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  //Count = show value}

  return (
    <div className="App">
      <Count /> 
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}