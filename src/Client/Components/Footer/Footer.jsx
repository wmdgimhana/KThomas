import React from "react";
import "./Footer.scss";
import FooteLogo from "../../../assets/footerLogo.png";
import LocationIco from "../../../assets/location.png";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import footerImg from "../../../assets/footerRec.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <img src={FooteLogo} alt="flogo" />
      </div>
      <div className="center">
        <div className="left">
          <div className="location">
            <img src={LocationIco} alt="location" />
            <span className="Poppins">
              Nawam Mawatha, <br />
              IBM Building, <br />
              Colombo, <br />
              Sri Lanka
            </span>
          </div>
        </div>
        <div className="middle">
          <div className="phoneNo">
            <CallIcon />
            <div className="number">0112 302 277</div>
          </div>

          <div className="socialIcons">
            <a href="https://web.facebook.com/KThomasShoes">
              <FacebookIcon className="ico" />
            </a>
            <a href="#">
              <InstagramIcon className="ico" />
            </a>
            <a href="#">
              <YouTubeIcon className="ico" />
            </a>
            <a href="#">
              <PinterestIcon className="ico" />
            </a>
          </div>
        </div>
        <div className="right">
          <NavLink to={"/"}>
            <div className="item">
              <ArrowForwardIosIcon />
              Home
            </div>
          </NavLink>
          <NavLink to={"/footwearleather"}>
            <div className="item">
              <ArrowForwardIosIcon />
              Footwear & Leather
            </div>
          </NavLink>
          <NavLink to={"/shop/1"}>
            <div className="item">
              <ArrowForwardIosIcon />
              Shop
            </div>
          </NavLink>
          <NavLink to={"/contact"}>
            <div className="item">
              <ArrowForwardIosIcon />
              Contact Us
            </div>
          </NavLink>
          <NavLink to={"/privacy"}>
            <div className="item">
              <ArrowForwardIosIcon />
              Privacy Policy
            </div>
          </NavLink>
        </div>
      </div>
      <div className="bottom">
        <div className="alrights">
          <span className="weight">Alrights Reserved.</span>
          <span>Copyright 2023 ©kthomas.lk</span>
        </div>
        <div className="developer">
          <span>
            Developed By -{" "}
            <a href="https://web.facebook.com/Cyberpixels">CYBERPIXELS</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
