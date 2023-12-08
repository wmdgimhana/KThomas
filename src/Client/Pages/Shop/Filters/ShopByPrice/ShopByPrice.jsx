import React from "react";

const ShopByPrice = () => {
  return (
    <div className="filter filter2">
      {/* --------------filter2 title-------------- */}
      <div className="filterTitle">
        <span>Shop By Price</span>
      </div>

      {/* --------------filter2 section1-------------- */}
      <div className="filterSection">
        <input type="radio" name="filter2" id="0to15000" value={"0to15000"} />
        <label htmlFor="0to15000">0 - 15,000 LKR</label>
      </div>

      {/* --------------filter2 section2-------------- */}

      <div className="filterSection">
        <input type="radio" name="filter2" id="15to30" value={"15to30"} />
        <label htmlFor="15to30">15,000 - 30,000 LKR</label>
      </div>

      {/* --------------filter2 section3-------------- */}

      <div className="filterSection">
        <input type="radio" name="filter2" id="30to65" value={"30to65"} />
        <label htmlFor="30to65">30,000 - 65,000 LKR</label>
      </div>

      {/* --------------filter2 section4-------------- */}

      <div className="filterSection">
        <input type="radio" name="filter2" id="65+" value={"65+"} />
        <label htmlFor="65+">65,000 LKR +</label>
      </div>
    </div>
  );
};

export default ShopByPrice;
