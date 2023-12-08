import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBox from "../Searchbox/SearchBox";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import MenuIcon from "@mui/icons-material/Menu";
import { CloseOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";

const Navbar = () => {
  // search open
  const [openSearch, setOpenSearch] = useState(false);

  // cart open
  const [cart, setCart] = useState(false);

  //wishlist open
  const [wishlist, setWishList] = useState(false);

  //menu icon trigger
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* mobile menuIcon */}
      <div className="menuIcon" onClick={() => setMenuOpen(true)}>
        <MenuIcon className="ico" />
      </div>
      {/* mobile menuIcon */}

      {/* logo */}
      <NavLink to={"/"}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </NavLink>
      {/* logo end */}

      {/* ------------------mobile navigation bar------------------ */}

      {menuOpen && (
        <motion.div
          className="mobileNavLinks Poppins"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="closeIcon"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CloseOutlined className="ico" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => setMenuOpen(false)}
          >
            <NavLink to={"/"}>Home</NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={() => setMenuOpen(false)}
          >
            <NavLink to={"/footwearleather"}>Footwear & Leather</NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => setMenuOpen(false)}
          >
            <NavLink to={"/shop/1"}>Shop</NavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            onClick={() => setMenuOpen(false)}
          >
            <NavLink to={"/contact"}>Contact us</NavLink>
          </motion.div>
        </motion.div>
      )}
      {/* ------------------mobile navigation bar end------------------ */}

      {/* ---------------------large screen navigation bar links-------------------- */}
      <div className="navLinks Poppins">
        <NavLink to={"/"}>Home</NavLink>
        <div className="line"></div>
        <NavLink to={"/footwearleather"}>Footwear & Leather</NavLink>
        <div className="line"></div>
        <NavLink to={"/shop/1"}>Shop</NavLink>
        <div className="line"></div>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </div>
      {/*------------------------------large screen navigation bar links end---------------------------- */}

      {/* navigation bar icons */}
      <div className="icons">
        {/* searchIcon */}
        <div className="search">
          {openSearch && <SearchBox />}
          <div
            className="searchIcon"
            onClick={() => setOpenSearch(!openSearch)}
          >
            <SearchIcon className="searchIco ico" />
          </div>
        </div>
        {/* search Icon end */}

        {/* FavIcon */}
        <div className="fav" onClick={() => setWishList(!wishlist)}>
          <FavoriteBorderIcon className="favIco ico" />
          <div className="mark"></div>
        </div>
        {/* FavIcon end */}

        {/* cart Icon */}
        <div className="cart" onClick={() => setCart(!cart)}>
          <ShoppingCartIcon className="cartIco ico" />
          <div className="mark"></div>
        </div>
        {/* cart Icon end*/}
      </div>
      {/* navigation bar icons end*/}

      {/* trigger the cart open */}
      {cart && <Cart />}

      {/* trigger the cart close */}
      {cart && <Cart closeCart={() => setCart(false)} />}

      {/* trigger the wishlist open */}
      {wishlist && <Wishlist />}

      {/* trigger the wishList close */}
      {wishlist && <Wishlist closeWish={() => setWishList(false)} />}
    </div>
  );
};

export default Navbar;
