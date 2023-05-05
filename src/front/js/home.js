import React, { useContext } from "react";
import { Context } from "./store/appContext";
import "../styles/home.css";

import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Main from "./component/main";
import Footer from "./component/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
