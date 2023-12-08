import React from "react";
import "./Contact.scss";
import OurEvents from "../../Components/Our Events/OurEvents";
import { KeyboardArrowDown } from "@mui/icons-material";
import ContactForm from "../../Components/Contact Form/ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      {/* section1 */}
      <div className="section1">
        {/* our events */}
        <OurEvents title={"Lets Look at Some of Our Events..."} />
        <div className="info">
          <div className="wrapper">
            <span className="title Molengo">Contact us</span>
            <KeyboardArrowDown />
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="section2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
