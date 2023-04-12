import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Training } from "./pages/training";
import { Info } from "./pages/info";
import { Demo } from "./pages/demo";
import { LogIn } from "./pages/login";
import { Perfil } from "./pages/perfil";
import { Signup } from "./pages/signup";
import { ForgotPassword } from "./pages/forgotpassword";
import { ResetPassword } from "./pages/resetpassword";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contact } from "./component/contact";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  //const navbarLinks = [
  //{
  // url: "https://3000-parrajuanpa-proyectofin-wjjmnfke05w.ws-us93.gitpod.io/",
  // title: "Home",
  //    },
  //    {
  //      url: "https://3000-parrajuanpa-proyectofin-wjjmnfke05w.ws-us93.gitpod.io/signup",
  //      title: "Sign Up",
  //    },
  //    {
  //      url: "https://3000-parrajuanpa-proyectofin-wjjmnfke05w.ws-us93.gitpod.io/login",
  //      title: "Log In",
  //    },
  //  ];

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<LogIn />} path="/login" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Training />} path="/training" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<ForgotPassword />} path="/forgotpassword" />
            <Route element={<ResetPassword />} path="/resetpassword" />
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
