import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import Agenda from "../src/Components/Agenda";
import Register from "../src/Components/Register";
import Navbar from "../src/Components/header";
import Footer from "../src/Components/Footer";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
