import React from "react";
import Filters from "./Filters/Filters";
import ProductList from "./ProductList/ProductList";
import "./Shop.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";

const Shop = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="shop">
      <div className="filterIco" onClick={() => setOpenFilter(!openFilter)}>
        <FilterAltIcon className="ico" />
      </div>
      <div className="wrapper">
        {openFilter && (
          <motion.div
            className="mobileLeft"
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="closeIco" onClick={() => setOpenFilter(false)}>
              <Close className="ico" />
            </div>
            <Filters />
          </motion.div>
        )}

        <div className="left">
          <Filters />
        </div>
        <div className="right">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Shop;
