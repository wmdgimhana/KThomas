import React from "react";
import "./SimilarProducts.scss";
import { Data } from "../../../Components/Data";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const SimilarProducts = () => {
  return (
    <div className="similarProducts">
      {Data.filter((item) => item.newArrival)
        .slice(0, 4)
        .map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
    </div>
  );
};

export default SimilarProducts;
