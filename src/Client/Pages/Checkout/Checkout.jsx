import React, { useState } from "react";
import "./Checkout.scss";

const Checkout = () => {
  const [creditCardNumber, setCreditCardNumber] = useState("");

  // -----------------Crdit card number in input--------------
  const formatCreditCard = (event) => {
    let input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedInput = input.replace(
      /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
      "$1 - $2 - $3 - $4"
    ); // Format

    formattedInput = formattedInput.slice(0, 19);

    setCreditCardNumber(formattedInput);
  };

  //   -------------------Credit Card Expire Date-------------
  const [expirationDate, setExpirationDate] = useState("");

  const formatExpirationDate = (event) => {
    let input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedInput = input.replace(/(\d{2})(\d{0,2})/, "$1/$2"); // Format as mm/yy

    // Limit to a maximum of 5 characters
    formattedInput = formattedInput.slice(0, 5);

    setExpirationDate(formattedInput);
  };

  //   ------------------------CVC/CCV------------------
  const [cvc, setCVC] = useState("");
  const handleCVCChange = (event) => {
    let input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedInput = input.slice(0, 3); // Limit to a maximum of 3 characters
    setCVC(formattedInput);
  };

  return (
    <div className="checkout">
      <div className="wrapper">
        <div className="title Poppins">
          <span>Checkout</span>
        </div>

        {/* ---------------------------------basicInfo--------------------------- */}

        <form>
          <div className="basicInfo">
            <span className="topic Poppins">Your basic Informations</span>
            <div className="inputSection">
              {/* ---------First Name--------- */}
              <div className="inputItem">
                <span>First name</span>
                <input type="text" name="fname" id="fname" />
              </div>

              {/* ---------Last Name--------- */}
              <div className="inputItem">
                <span>Last name</span>
                <input type="text" name="lname" id="lname" />
              </div>
            </div>

            {/* ---------Email Address--------- */}
            <div className="inputSection">
              <div className="inputItem">
                <span>Email Address</span>
                <input type="email" name="email" id="email" />
              </div>

              {/* ---------Phone Number--------- */}
              <div className="inputItem">
                <span>Phone Number</span>
                <input type="tel" name="phoneNo" id="phoneNo" />
              </div>
            </div>

            {/* ---------Address--------- */}
            <div className="inputSection">
              <div className="inputItem">
                <span>Address</span>
                <textarea
                  name="adress"
                  id="adress"
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          {/* ---------------------------------Payment Info--------------------------- */}

          <div className="paymentInfo">
            <span className="topic Poppins">Payment Informations</span>

            <div className="inputSection">
              {/* ----------Credit Card Number */}
              <div className="inputItem">
                <span>Credit Card Number</span>
                <input
                  type="text"
                  name="creditCard"
                  id="creditCard"
                  placeholder="xxxx xxxx xxxx xxxx"
                  value={creditCardNumber}
                  onChange={formatCreditCard}
                  maxLength={19}
                  className="cardNo"
                />
              </div>

              {/* ------------Credit Card Expire Month and Year (mm/yy)------------- */}
              <div className="inputSection">
                <div className="inputItem">
                  <span>Expiry date</span>
                  <input
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    value={expirationDate}
                    onChange={formatExpirationDate}
                    maxLength={5} // Set maximum length
                    placeholder="mm/yy"
                    className="expiry"
                  />
                </div>
              </div>

              {/* ------------CVC/CCV-------- */}

              <div className="inputSection">
                <div className="inputItem">
                  <span>CVC/CCV</span>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    value={cvc}
                    onChange={handleCVCChange}
                    maxLength={3} // Set maximum length
                    placeholder="xxx"
                    className="ccv"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ----------------Cash on Delivery----------- */}
          <div className="cashOn">
            <div className="inputItem">
              <input type="checkbox" id="con" />
              <label htmlFor="con">Cash on Delivery</label>
            </div>
          </div>

          {/* submit button */}
          <button className="proceedBtn">PROCEED</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
