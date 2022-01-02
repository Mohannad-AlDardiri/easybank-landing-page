import React from "react";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Page from "./page.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="easybank-landing-page" element={<Page />} />
        <Route path="easybank-landing-page/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
