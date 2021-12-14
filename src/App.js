import React, { useState } from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Advanteges from "./components/Advantages/Advantages";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="app-container">
      <header>
        <Nav isOpen={isOpen} setOpen={setOpen} />
        <Landing isOpen={isOpen} />
      </header>
      <div className="main">
      <main>
        <Advanteges />
        <Articles />
      </main>
      <Footer />
      </div>

    </div>
  );
}

export default App;
