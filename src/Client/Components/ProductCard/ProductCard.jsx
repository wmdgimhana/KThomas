import React, { useState } from "react";
import "./ProductCard.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";
import { Skeleton } from "antd";
import { useEffect } from "react";

const ProductCard = ({ item }) => {
  const [fav, setFav] = useState(false);

  //Loading time simulate
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(item);
    }, 3000);
  }, []);

  return (
    <motion.div
      className="productCard"
      initial={{ scale: 1.0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      {data ? (
        <div className="container">
          {fav ? (
            <div onClick={() => setFav(false)}>
              {" "}
              <FavoriteIcon className="favIco" style={{ color: "#C92328" }} />
            </div>
          ) : (
            <div onClick={() => setFav(true)}>
              <FavoriteBorderIcon className="favIco" />
            </div>
          )}

          {data.offer && <span className="offer Poppins">{data.offer}</span>}

          <div className="top">
            <div className="productImg">
              {data.productImg ? (
                <motion.img src={data.productImg} alt="img" />
              ) : (
                <Skeleton active />
              )}
            </div>

            <div className="productName">
              <NavLink to={`/product/${data.id}`}>
                {" "}
                <motion.span className="Poppins">
                  {data.productName ? data.productName : <Skeleton active />}
                </motion.span>
              </NavLink>
            </div>
          </div>

          <div className="bottom">
            <div className="price">
              <span className="Poppins">
                {data.price ? data.price : <Skeleton active />}
              </span>
            </div>

            <ShoppingCartIcon className="cartIco" />
          </div>
        </div>
      ) : (
        <Skeleton active />
      )}
    </motion.div>
  );
};

export default ProductCard;
