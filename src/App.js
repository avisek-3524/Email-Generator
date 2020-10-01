import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="nav-ani">
        <Navbar />
      </header>
      <main>hi</main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
