import React, { useState } from "react";
import "./NewsLetter.scss";
import ving from "../../../assets/ving.png";
import send from "../../../assets/send.png";

const NewsLetter = () => {
  // take the email in input box

  const [email, setEmail] = useState("");

  return (
    <div className="newsLetter">
      <div className="title">
        <span className="Poppins">Get Notified With Our NewsLetter</span>
      </div>

      <div className="inputBox">
        <img src={ving} alt="ving" />
        <input
          type="email"
          placeholder="Please Enter Your Email"
          className="Poppins"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* send button */}
        <img src={send} alt="send" className="sendBtn" />
      </div>
    </div>
  );
};

export default NewsLetter;
