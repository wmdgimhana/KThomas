import React from "react";
import "./Welcome.scss";
import HeaderLogo from "../../../../assets/headerLogo.png";
import Shooes1 from "../../../../assets/shooes.png";
import Shooes2 from "../../../../assets/shooes2.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="wrapper">
        {/* top */}
        <div className="top">
          {/* left */}
          <div className="left">
            <motion.img
              src={HeaderLogo}
              alt="HL"
              className="hLogo"
              initial={{ scale: 9.9, opacity: 0 }}
              animate={{ scale: 0.9, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="description Poppins"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,sed
              do <br />
              eiusmod tempor <br /> incididunt ut labore et dolore magna <br />{" "}
              aliqua.
            </motion.div>

            <motion.div
              className="socialIcons"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
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
            </motion.div>
          </div>

          {/* right */}
          <div className="right">
            <motion.img
              src={Shooes1}
              alt="sh1"
              className="sh1"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src={Shooes2}
              alt="sh2"
              className="sh2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </div>
        {/* top end */}

        {/* bottom */}
        <div className="bottom">
          <NavLink to={"/footwearleather"}>
            <div className="container">
              <span className="Inter">Our Products</span>
              <KeyboardArrowDownIcon />
            </div>
          </NavLink>
        </div>
        {/* bottom end */}
      </div>
    </div>
  );
};

export default Welcome;
