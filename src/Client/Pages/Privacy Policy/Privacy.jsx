import React from "react";
import "./Privacy.scss";

const Privacy = () => {
  return (
    <div className="privacy Poppins">
      <div className="wrapper">
        <div className="topic ">
          <h1>Privacy Policy for K.Thomas</h1>
          <p>
            At K.Thomas, we are committed to protecting the privacy of our
            users. This Privacy Policy outlines the types of personal
            information we collect, how it is used, and the steps we take to
            ensure your information is handled responsibly
          </p>
        </div>

        <div className="section2 section">
          <h2>1. Information We Collect:</h2>

          <div className="section2Part1">
            <h3>1.1 Personal Information:</h3>
            <p>
              When you visit our website, we may collect personal information
              such as your name, email address, and contact details when you
              make a purchase.
            </p>
          </div>

          <div className="section2Part2">
            <h3>1.2 Payment Information:</h3>
            <p>
              To process payments, we collect payment information, including
              credit card details. Please note that we do not store this
              information on our servers. All payment transactions are processed
              through secure and encrypted payment gateways.
            </p>
          </div>

          <div className="section2Part3">
            <h3>1.3 Cookies:</h3>
            <p>
              We use cookies to enhance your browsing experience. Cookies are
              small files stored on your device that help us analyze website
              usage and improve our services. You can choose to disable cookies
              in your browser settings.
            </p>
          </div>
        </div>

        <div className="section3 section">
          <h2>2. How We Use Your Information:</h2>

          <div className="section3Part1">
            <h3>2.1 Order Processing:</h3>
            <p>
              We use your personal information to process and fulfill your
              orders, including shipping and communication regarding your
              purchase.
            </p>
          </div>

          <div className="section3Part2">
            <h3>2.2 Communication:</h3>
            <p>
              With your consent, we may send you promotional emails and updates
              about our products. You can opt-out of these communications at any
              time.
            </p>
          </div>

          <div className="section3Part3">
            <h3>2.3 Analytics:</h3>
            <p>
              We may use analytics tools to gather information about how users
              interact with our website. This helps us improve our services and
              user experience.
            </p>
          </div>
        </div>

        <div className="section4 section">
          <h2>3. Information Sharing:</h2>

          <div className="section4Part1">
            <h3>3.1 Third-Party Services:</h3>
            <p>
              We may share your information with trusted third-party service
              providers who assist us in operating our website, conducting
              business, or servicing you. These parties are obligated to keep
              your information confidential.
            </p>
          </div>

          <div className="section4Part2">
            <h3>3.2 Legal Compliance:</h3>
            <p>
              We may disclose your information if required by law or in response
              to legal requests.
            </p>
          </div>
        </div>

        <div className="section5 section">
          <h2>4. Security:</h2>
          <p>
            We take appropriate measures to ensure the security of your personal
            information. However, no online transmission or electronic storage
            is 100% secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="section6 section">
          <h2>5. Your Choices:</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. You can contact us at [contact@email.com] to make such
            requests.
          </p>
        </div>

        <div className="section7 section">
          <h2>6. Changes to this Privacy Policy:</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time.
            Changes will be posted on this page, and the effective date will be
            indicated.
          </p>

          <p>
            By using the K.Thomas website, you consent to the terms outlined in
            this Privacy Policy.
          </p>

          <p>
            If you have any questions or concerns, please contact us at
            [contact@email.com].
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
