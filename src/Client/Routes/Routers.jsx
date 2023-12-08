import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Shop from "../Pages/Shop/Shop";
import FootwearLeather from "../Pages/footwear&leather/FootwearLeather";
import Contact from "../Pages/Contact/Contact";
import Privacy from "../Pages/Privacy Policy/Privacy";
import Checkout from "../Pages/Checkout/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="shop/:id" element={<Shop />} />
      <Route path="footwearleather" element={<FootwearLeather />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routers;
