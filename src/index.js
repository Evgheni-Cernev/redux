import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer  from "./Redux/getAllProducts/reducers/root.reducer";
import thunk from "redux-thunk";

const rootElement = document.getElementById("root");

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
