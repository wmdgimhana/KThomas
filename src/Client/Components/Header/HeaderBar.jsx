import React from "react";
import "./Headerbar.scss";

const HeaderBar = () => {
  return (
    <div className="headerBar Inter">
      {/* phone number */}
      <div className="pNumber">
        <span>0112 302 277</span>
      </div>

      {/* address */}
      <div className="address">
        <span>Nawam Mawatha, IBM Building, Colombo, Sri Lanka</span>
      </div>
    </div>
  );
};

export default HeaderBar;
