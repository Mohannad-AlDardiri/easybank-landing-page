import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
