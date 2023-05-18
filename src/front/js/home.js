import React, { useContext } from "react";
import { Context } from "./store/appContext";
import "../styles/home.css";

import Hero from "./component/hero";
import Main from "./component/main";

const Home = () => {
  return (
    <>
      <Hero />
      <Main />
    </>
  );
};

export default Home;
