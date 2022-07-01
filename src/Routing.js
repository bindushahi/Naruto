import React from "react";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
