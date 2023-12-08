import React from "react";
import "./Filters.scss";
import NArrivalsNHotDeals from "./NewArrivalsAndHotDeals/NArrivalsNHotDeals";
import ShopByPrice from "./ShopByPrice/ShopByPrice";
import ShopBySize from "./ShopBySize/ShopBySize";
import ColorFilter from "./ColorFilter/ColorFilter";

const Filters = () => {
  return (
    <div className="filters">
      {/* ----------filters--------- */}

      {/* ---------filter 1--------- */}
      <NArrivalsNHotDeals />

      {/* ----------filter 2----------- */}
      <ShopByPrice />

      {/* --------------filter3-------------- */}
      <ShopBySize />

      {/* --------------filter4-------------- */}

      <ColorFilter />
    </div>
  );
};

export default Filters;
