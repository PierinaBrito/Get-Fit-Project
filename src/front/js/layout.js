import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Training } from "./pages/training";
import { Demo } from "./pages/demo";
import { Perfil } from "./pages/perfil";
import { Dia } from "./pages/dia";
import { Configuracion } from "./pages/configuracion";

import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { ForgotPassword } from "./pages/forgotpassword";
import { ResetPassword } from "./pages/resetpassword";
import { Success } from "./pages/success";

import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
//import Information from "./component/information";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Training />} path="/training" />
            {/* <Route element={<Information />} path="/information" /> */}
            <Route element={<About />} path="/about" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Success />} path="/success" />
            <Route element={<Dia />} path="/dia" />
            <Route element={<Configuracion />} path="/configuracion" />
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
