import React from "react";
import "./Cart.scss";
import { Close, CloseOutlined } from "@mui/icons-material";
import product1 from "../../../assets/product1.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// cart items

const cartItems = [
  {
    id: 15,
    productImg: product3,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: false,
    hotsDeals: false,
  },

  {
    id: 16,
    productImg: product4,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: false,
    hotsDeals: false,
  },

  {
    id: 17,
    productImg: product1,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: false,
    hotsDeals: false,
  },

  {
    id: 18,
    productImg: product2,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: false,
    hotsDeals: false,
  },

  {
    id: 1,
    productImg: product1,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: true,
    hotsDeals: false,
  },

  {
    id: 2,
    productImg: product2,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: true,
    hotsDeals: false,
  },

  {
    id: 3,
    productImg: product3,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: true,
    hotsDeals: false,
  },

  {
    id: 4,
    productImg: product4,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: true,
    hotsDeals: false,
  },

  {
    id: 5,
    productImg: product1,
    productName: "Language Marchio Men's Tan Crust Leather Shoes",
    price: "LKR 39,950",
    newArrival: true,
    hotsDeals: true,
    offer: "20%",
  },
];

const Cart = ({ closeCart }) => {
  return (
    <motion.div
      className="cartContainer Poppins"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="top">
        <span className="title">Your Cart</span>
        <CloseOutlined className="closeIco" onClick={closeCart} />
      </div>

      <div className="products">
        <div className="wrapper">
          {cartItems.map((item) => (
            <div key={item.id} className="productContainer">
              <div className="imgContainer">
                <img src={item.productImg} alt="productImg" />
              </div>

              <div className="left">
                <span className="productName">{item.productName}</span>
                <span className="qty">Qty 1</span>
              </div>
              <div className="right">
                <CloseOutlined className="closeIco" />
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}

          <div className="total">
            <span className="text Poppins">Total</span>
            <span className="totalPrice">123,000</span>
          </div>

          <div className="btns">
            <span className="clear Poppins">Clear Cart</span>
            <NavLink to={"/checkout"}>
              <button className="proceed" onClick={() => closeCart(true)}>
                Proceed
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
