import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./HotDeals.scss";
import { Data } from "../Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HotDeals = () => {
  //filter only Hot Deals
  const hotDeals = Data.filter((item) => item.hotsDeals);

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
    <div className="hotDeals">
      <div className="top">
        <span className="title Poppins">This Month Hot Deals !!</span>
      </div>
      <div className="center">
        <Slider {...settings} className="slider">
          {hotDeals.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
      <div className="bottom">
        <div className="ending">
          <span className="Molengo">Ending in 30th Nov</span>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
