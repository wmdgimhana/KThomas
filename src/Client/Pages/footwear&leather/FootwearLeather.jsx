import React from "react";
import "./FootwearLeather.scss";
import Welcome from "./Welcome/Welcome";
import HotDeals from "../../Components/Hot Deals/HotDeals";
import NewArrivals from "../../Components/New Arrivals/NewArrivals";
import AllProducts from "./All Products/AllProducts";

const FootwearLeather = () => {
  return (
    <div className="footWearLeather">
      <Welcome />
      <div className="sectionTwo">
        <HotDeals />
      </div>
      <div className="section3">
        <NewArrivals />
      </div>
      <div className="section4">
        <AllProducts />
      </div>
    </div>
  );
};

export default FootwearLeather;
