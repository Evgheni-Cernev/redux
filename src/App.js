import React, { useEffect } from "react";
// import "./styles.css";
import Count from "./Count";
import { getAllProducts, decrement } from "./Redux/getAllProducts/actions/getAllProducts.action";
import { useDispatch } from "react-redux";
import { getComments } from './Redux/getAllProducts/actions/getComments.action'
import { useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getComments())
  }, [])


  const state = useSelector(state => {
    return state;
  });

  console.log(state.comments.comments.length  && state.comments.comments[0].id)

  //Count = show value}

  return (
    <div className="App">
      <Count />

      <div>{!!state.comments.comments.length && state.comments.comments[0].id}</div>
      <button onClick={() => dispatch(getAllProducts())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}