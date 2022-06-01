import React from "react";
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App";
import store from "./app/store";
import {BrowserRouter} from "react-router-dom"
import "./index.css"
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
