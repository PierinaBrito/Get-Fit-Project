import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { LogIn } from "./pages/login";
import { Perfil } from "./pages/perfil";
import { Signup } from "./pages/signup";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const navbarLinks = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/login",
      title: "Log In",
    },
    {
      url: "/signup",
      title: "Sign Up",
    }
  ];

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar navbarLinks={navbarLinks} />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<LogIn />} path="/login" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
