import React from "react";
import "./SearchBox.scss";
import { motion } from "framer-motion";

const SearchBox = () => {
  return (
    <motion.div
      className="searchBox"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="wrapper">
        <input
          type="search"
          placeholder="Search Products"
          className="Poppins"
        />
      </div>
    </motion.div>
  );
};

export default SearchBox;
