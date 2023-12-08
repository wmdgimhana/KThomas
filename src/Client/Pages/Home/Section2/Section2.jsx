import React from "react";
import "./Section2.scss";
import footWears from "../../../../assets/footWears.png";
import leather from "../../../../assets/leather.png";
import { motion } from "framer-motion";
const Section2 = () => {
  const cards = [
    {
      id: 1,
      name: "Footwears",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: footWears,
    },

    {
      id: 2,
      name: "Leather",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      img: leather,
    },
  ];

  return (
    <div className="section2">
      <div className="top">
        <motion.span
          className="title Poppins"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Footwear & Leather
        </motion.span>

        <motion.p
          className="desc Inter"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
        </motion.p>
      </div>
      <div className="bottom">
        {cards.map((item) => (
          <div key={item.id} className="container">
            <div className="title Poppins">{item.name}</div>
            <div className="desc Inter">{item.desc}</div>
            <div className="imgContainer">
              <motion.img
                src={item.img}
                alt={item.name}
                initial={{ scale: 1.0 }}
                whileHover={{ scale: 1.7 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
