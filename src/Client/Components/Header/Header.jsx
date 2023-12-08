import React from "react";
import Navbar from "../Navbar/Navbar";
import HeaderBar from "./HeaderBar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <HeaderBar />
      <Navbar />
    </div>
  );
};

export default Header;
