import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Poppins",
  headerBgColor: "#333",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#333",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "1",
    message: "Welcome to our website! How can I assist you?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      {
        value: "product_info",
        label: "Product Information",
        trigger: "product_info",
      },
      {
        value: "contact_support",
        label: "Contact Support",
        trigger: "contact_support",
      },
      {
        value: "bye",
        label: "Bye",
        trigger: "bye",
      },
    ],
  },
  {
    id: "product_info",
    message:
      "We offer a wide range of high-quality shoes for every occasion. Our collection includes sneakers, formal shoes, casual shoes, and more. Each pair is crafted with comfort and style in mind. Browse our website to explore our latest offerings and find the perfect pair for you!",
    trigger: "2",
  },
  {
    id: "contact_support",
    message: "You can contact our support team at Kthomasshoes@gmail.com.",
    trigger: "2",
  },

  {
    id: "bye",
    message: "Thank you for visiting our website. Have a great day!",
    end: true,
  },
];

const Chatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating="true" />;
    </ThemeProvider>
  );
};

export default Chatbot;
