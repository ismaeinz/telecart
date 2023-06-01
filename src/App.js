import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import NavbarApp from "./components/NavbarApp";
import Wishing from "./components/Wishing";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishing" element={<Wishing />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
