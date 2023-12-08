import React from "react";
import "./ProductList.scss";
import { Data } from "../../../Components/Data";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const ProductList = () => {
  const [productData, setProductData] = useState(Data);
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 8;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = productData
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <div className="productList">
          <ProductCard item={product} key={product.id} />
        </div>
      );
    });

  const pageCount = Math.ceil(productData.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="productList">
      {displayProducts}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default ProductList;
