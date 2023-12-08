import React from "react";
import Welcome from "./Welcome/Welcome";
import Section2 from "./Section2/Section2";
import NewArrivals from "../../Components/New Arrivals/NewArrivals";
import OurEvents from "../../Components/Our Events/OurEvents";
import HotDeals from "../../Components/Hot Deals/HotDeals";
import NewsLetter from "../../Components/News letter/NewsLetter";
import "./Home.scss";
import Chatbot from "../../Components/Chatbot/Chatbot";

const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <Section2 />


      <div className="section3">
        <NewArrivals />
      </div>

      <div className="section4">
        <OurEvents />
      </div>

      <div className="section5">
        <HotDeals />
      </div>

      <div className="section6">
        <NewsLetter />
      </div>

      {/* chat bot */}
      <Chatbot />
    </div>
  );
};

export default Home;
