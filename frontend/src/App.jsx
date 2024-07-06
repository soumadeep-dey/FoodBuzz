// import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>

      <Footer />
    </>
  );
};

export default App;
