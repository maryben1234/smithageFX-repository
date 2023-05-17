import React from "react";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Home from "./pages/landing-pages/Home";
import Contact from "./pages/contact/Contact";
import { Route, Routes } from "react-router";


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
