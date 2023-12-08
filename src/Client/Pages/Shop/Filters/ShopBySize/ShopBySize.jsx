import React from "react";
import Filters from "../Filters";

const ShopBySize = () => {
  return (
    <div className="filter filter3">
      {/* --------------filter3 title-------------- */}
      <div className="filterTitle">
        <span>Shop By Size</span>
      </div>

      {/* --------------filter3 section1-------------- */}
      <div className="filterSection">
        <input type="radio" name="filter3" id="1-5" value={"1-5"} />
        <label htmlFor="1-5">1 - 5</label>
      </div>

      {/* --------------filter3 section2-------------- */}
      <div className="filterSection">
        <input type="radio" name="filter3" id="5-10" value={"5-10"} />
        <label htmlFor="5-10">5 - 10</label>
      </div>

      {/* --------------filter3 section3-------------- */}
      <div className="filterSection">
        <input type="radio" name="filter3" id="10-15" value={"10-15"} />
        <label htmlFor="10-15">10 - 15</label>
      </div>

      {/* --------------filter3 section4-------------- */}
      <div className="filterSection">
        <input type="radio" name="filter3" id="15-20" value={"15-20"} />
        <label htmlFor="15-20">15 - 20</label>
      </div>
    </div>
  );
};

export default ShopBySize;
