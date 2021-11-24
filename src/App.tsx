import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/menus" element={<Home />} />

          <Route path="/hours&location" element={<Home />} />

          <Route path="/reservations" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
