import React from "react";
import "./NewArrivals.scss";
import ProductCard from "../ProductCard/ProductCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Data } from "../Data";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const NewArrivals = () => {
  const arrivalData = Data.filter((item) => item.newArrival);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="newArrivals">
      {/* top */}
      <div className="top">
        {/* title */}
        <span className="title Poppins">New Arrivals</span>
      </div>
      {/* top end */}
      {/* center */}
      <div className="center">
        {/*data to product card */}
        <Slider {...settings} className="slider">
          {arrivalData.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Slider>
      </div>
      {/* center end */}
      {/* bottom */}
      <div className="bottom">
        <NavLink to={`/shop/1`}>
          <div className="view">
            <span className="Molengo">View All</span>
            <ArrowForwardIosIcon className="ico" />
          </div>
        </NavLink>
      </div>
      {/* bottom end */};
    </div>
  );
};

export default NewArrivals;
