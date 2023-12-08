import React from "react";
import "./ContactForm.scss";
import Map from "../Map/Map";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <div className="container">
        <div className="contact">
          <div className="title">
            <div className="titleText Poppins">Contact us</div>

            <div className="desc Inter">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor
            </div>
          </div>
          <form className="form">
            <div className="name">
              <input type="text" placeholder="First Name" className="Poppins" />
              <input type="text" placeholder="Last Name" className="Poppins" />
            </div>
            <input type="email" placeholder="Your Email" className="Poppins" />
            <textarea
              name="message"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Message..."
              className="Poppins"
            ></textarea>
            <button className="Poppins">Send</button>
          </form>
        </div>

        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
