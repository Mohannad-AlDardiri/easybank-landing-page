import React, { useState } from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Advanteges from "./components/Advantages";
import Articles from "./components/Articles";
import Footer from "./components/Footer";


function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="app-container">
      <header className="text-center">
        <Nav isOpen={isOpen} setOpen={setOpen} />

        <Landing isOpen={isOpen} />
      </header>
      <main>
        <Advanteges />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
