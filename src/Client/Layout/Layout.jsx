import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Routes from "../Routes/Routers";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default Layout;
