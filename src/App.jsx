import React from "react";
import Layout from "./Client/Layout/Layout";
import "./App.css";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Layout />
    </div>
  );
};

export default App;
