


import React, { useState, Fragment, useEffect } from 'react';
import NavbarBot from './components/NavbarBot';
import Prova from './components/Prova';
import FooterSmall from './components/FooterSmall';





//CSS
import './App.css';














//React Router
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';










const App = (e) => {

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    });

    return null;
  }

  function ScrollToTopOnMountCamera() {
    useEffect(() => {
      window.scrollTo(0, 60);
    });

    return null;
  }



  var isMobile = false; //initiate as false
  // device detection
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
  }


  //Funzione Larghezza schermo

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 840 && handleSideNavToggle();
  }, [width]);

  function handleSideNavToggle() {
    console.log("toggle it");
  }

  console.log(width)


  return (
    <>
      <NavbarBot />





    </>
  )
};





export default App;

