import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../js/component/ScrollToTop.jsx";

import { Home } from "../js/views/Home.jsx";
import { Noticias } from "../js/views/Noticias.jsx";
import { Contactanos } from "../js/views/Contactanos.jsx";
import { Criptosasun } from "../js/views/Criptosasun.jsx";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Noticias />} path="/noticias" />
            <Route element={<Contactanos />} path="/contactanos" />
            <Route element={<Criptosasun />} path="/criptosasun" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
