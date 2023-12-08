import React from "react";

const NArrivalsNHotDeals = () => {
  return (
    <div className="filter filter1">
      <div className="filterSection">
        <input type="radio" id="newAr" value={"newAr"} name="filter1" />
        <label htmlFor="newAr">New Arrivals</label>
      </div>

      {/* filter1 section2 */}
      <div className="filterSection filterSection2">
        <input type="radio" id="hotD" value={"hotD"} name="filter1" />
        <label htmlFor="hotD">Hot Deals</label>
      </div>
    </div>
  );
};

export default NArrivalsNHotDeals;
