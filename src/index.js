import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";

import "./index.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  // always shows the not found component untill i change the link to just localhost:3000. and i think it will reduce a problem when deploy 
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
