import React from "react";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Navbar from "./common/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
