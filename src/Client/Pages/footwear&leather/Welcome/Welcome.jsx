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
              animate={{ scale: 1.0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="title"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="Poppins">Footwear & Leather</span>
            </motion.div>
            <motion.div
              className="description Poppins"
              initial={{ x: -300, opacity: 0 }}
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
              <FacebookIcon className="ico" />
              <InstagramIcon className="ico" />
              <YouTubeIcon className="ico" />
              <PinterestIcon className="ico" />
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
      </div>
    </div>
  );
};

export default Welcome;
