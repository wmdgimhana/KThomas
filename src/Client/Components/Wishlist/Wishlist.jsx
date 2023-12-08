import React from "react";
import { CloseOutlined, ShoppingCart } from "@mui/icons-material";
import product1 from "../../../assets/product1.png";
import product2 from "../../../assets/product2.png";
import product3 from "../../../assets/product3.png";
import product4 from "../../../assets/product4.png";
import "./Wishlist.scss";
import { motion } from "framer-motion";

// wishList items

const wishListItems = [
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

const Wishlist = ({ closeWish }) => {
  return (
    <motion.div
      className="wishListContainer Poppins"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="top">
        <span className="title">Your Wishlist</span>
        <CloseOutlined className="closeIco" onClick={closeWish} />
      </div>

      <div className="products">
        <div className="wrapper">
          {wishListItems.map((item) => (
            <div key={item.id} className="productContainer">
              <div className="imgContainer">
                <img src={item.productImg} alt="productImg" />
              </div>

              <div className="left">
                <span className="productName">{item.productName}</span>
                <span className="qty">Qty 1</span>
              </div>

              <div className="right">
                <div className="sec1">
                  <span className="price">{item.price}</span>
                </div>
                <div className="sec2">
                  <CloseOutlined className="closeIco" />
                  <ShoppingCart className="cartIco" />
                </div>
              </div>
            </div>
          ))}

          <div className="btns">
            <span className="clear Poppins">Clear Wishlist</span>
            <button className="proceed">Add all to Cart</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Wishlist;
