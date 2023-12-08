import React from "react";
import "./Product.scss";
import productImg from "../../../assets/product1.png";
import ColorFilter from "./Color filter/ColorFilter";
import SimilarProducts from "./Similar Products/SimilarProducts";

const Product = () => {
  return (
    <div className="product">
      <div className="wrapper">
        {/* -------left------- */}

        <div className="left">
          <div className="productImg">
            <img src={productImg} alt="productImg" />
          </div>
        </div>

        {/* -------right------- */}
        <div className="right">
          <div className="productDetails">
            {/* ----------product Title---------- */}
            <div className="productTitle Poppins">
              <span>Language Marchio Men's Tan Crust Leather Shoes</span>
            </div>

            {/* ----------product price---------- */}
            <div className="price Poppins">
              <span>LKR 39,950</span>
            </div>

            {/* ----------sizes---------- */}
            <div className="sizes Poppins">
              <div className="title">Sizes -</div>
              <span>Small,</span>
              <span>Medium,</span>
              <span>Large</span>
            </div>

            {/* ----------colors---------- */}
            <div className="color">
              <div className="title Poppins">Colors -</div>
              <ColorFilter />
            </div>

            {/* ----------buttons--------- */}
            <div className="buttons">
              <div className="wishlist Poppins">
                <button>Add to Wishlist</button>
              </div>

              <div className="cart Poppins">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------similar Products------ */}

      <div className="similerProducts">
        <div className="title Poppins">
          <span>Similar Products</span>
        </div>

        <div className="products">
          <SimilarProducts />
        </div>
      </div>
    </div>
  );
};

export default Product;
