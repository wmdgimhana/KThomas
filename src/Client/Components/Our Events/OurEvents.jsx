import React from "react";
import "./OurEvents.scss";
import Event1 from "../../../assets/event1.png";
import Event2 from "../../../assets/event2.png";
import Event3 from "../../../assets/event3.png";
import { motion } from "framer-motion";

const eventData = [
  {
    id: 1,
    Img: Event1,
    EventsName: "Footwear & Leather Fair 2023 - Opening Ceremony at BMICH",
    EventDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    Date: "10th Mar 2023",
    Views: "1.7K Views",
  },

  {
    id: 2,
    Img: Event2,
    EventsName: "Footwear & Leather Fair 2023",
    EventDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    Date: "11th Mar 2023",
    Views: "1.7K Views",
  },
];

const OurEvents = ({ title }) => {
  return (
    <div className="ourEvents">
      <div className="top">
        <span className="title Poppins">{title ? title : "Our Events"}</span>
      </div>
      <div className="center">
        <div className="left">
          {eventData.map((item) => (
            <motion.div
              className="eventContainer"
              key={item.id}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.Img} alt="evntImg" />

              <div className="details">
                <span className="name Poppins">{item.EventsName}</span>
                <p className="desc Inter">{item.EventDesc}</p>
                <div className="dates">
                  <span className="date Poppins">{item.Date}</span>

                  <span className="views Poppins">{item.Views}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="right">
          <motion.div
            className="event3Container"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={Event3} alt="event3" />
            <div className="details">
              <div className="date Poppins">
                <span>11th Mar 2023</span>
              </div>
              <div className="views Poppins">
                <span>1.7K</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
