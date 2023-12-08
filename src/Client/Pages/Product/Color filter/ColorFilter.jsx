import React from "react";
import "./ColorFilter.scss";

const ColorFilter = () => {
  return (
    <div>
      <div className="colorFilters">
        {/*-----------Color1--------- */}
        <div className="gray">
          <input type="radio" name="color" className="gray" id="gray" />
        </div>

        {/*-----------Color2--------- */}

        <div className="brown">
          <input type="radio" name="color" className="brown" id="brown" />
        </div>

        {/*-----------Color3--------- */}
        <div className="black">
          <input type="radio" name="color" className="black" id="black" />
        </div>

        {/*-----------Color4--------- */}
        <div className="lightBlack">
          <input
            type="radio"
            name="color"
            className="lightBlack"
            id="lightBlack"
          />
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
