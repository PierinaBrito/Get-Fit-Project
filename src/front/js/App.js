// import $ from "jquery";
// import Popper from "popper.js";
import React from "react";
import "../styles/App.css";

//import video from "../img/AdobeStock.mp4";

import fit_00 from "../img/AdobeStock4.jpeg";
import fit_01 from "../img/AdobeStock2.jpeg";
import fit_02 from "../img/AdobeStock3.jpeg";
import fit_03 from "../img/AdobeStock1.jpeg";
//import fit_04 from "../img/img4.JPG";
//import fit_05 from "../img/img5.JPG";
//import fit_06 from "../img/img6.png";
//import fit_07 from "../img/fit3.jpg";
//import fit_08 from "../img/img8.png";

import Hero from "./pages/Hero.js";
import Slider from "./pages/Slider.js";
import Navbar from "./pages/Navbar.js";
//import Register from "./pages/Register";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "New User" },
  { url: "#", title: "Member" },
];

function App() {
  return (
    <div className="App">
      {/*<Register /> */}
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={fit_03} />
      <Slider
        imageSrc={fit_01}
        title={"Achieve Your Fitness Goals"}
        subtitle={"This is your Ultimate Guide to Health and Wellness!"}
      />
      <Slider
        imageSrc={fit_00}
        title={"Start your Journey Today!"}
        subtitle={
          "Join to Our Fitness Community and Transform your Body and Mind."
        }
        flipped={true}
      />
      {/* <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video> */}
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

// import { Home } from "./pages/home";
// import { Demo } from "./pages/demo";
// import { Single } from "./pages/single";
// import injectContext from "./store/appContext";

// import { Navbar } from "./component/Navbar";
// import { Footer } from "./component/footer";

//create your first component
// const Layout = () => {
//the basename is used when your project is published in a subdirectory and not in the root of the domain
// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
//    const basename = process.env.BASENAME || "";

//    return (
//        <div>
//            <BrowserRouter basename={basename}>
//                <ScrollToTop>
//                    <Navbar />
//                    <Routes>
//                        <Route element={<Home />} path="/" />
//                        <Route element={<Demo />} path="/demo" />
//                        <Route element={<Single />} path="/single/:theid" />
//                        <Route element={<h1>Not found!</h1>} />
//                    </Routes>
//                    <Footer />
//                </ScrollToTop>
//            </BrowserRouter>
//        </div>
//    );
// };

//export default injectContext(Layout);
