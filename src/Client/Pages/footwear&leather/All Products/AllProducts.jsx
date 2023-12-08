import React from "react";
import "./AllProducts.scss";
import SearchBox from "../../../Components/Searchbox/SearchBox";
import SearchIcon from "@mui/icons-material/Search";

import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Data } from "../../../Components/Data";

const AllProducts = () => {
  return (
    <div className="allProducts">
      {/* top bar */}
      <div className="title">
        <div className="name Poppins">All Products</div>

        {/* search box */}
        <div className="searchBox">
          <div className="wrapper">
            <SearchBox />
            <SearchIcon className="searchIco" />
          </div>
        </div>
      </div>
      {/* top bar end */}

      <div className="productsContainer">
        {/* products */}
        <div className="products">
          {Data.slice(0, 20).map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
        {/* products end */}
      </div>
    </div>
  );
};

export default AllProducts;
