import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Page from './page.js'
function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
