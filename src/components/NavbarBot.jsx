import React, { useState } from 'react'

import FooterSmall from './FooterSmall';


import { Link } from 'react-router-dom';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import Logo from "./cuori.png";
import "./Navbar.css";
import { Carousel, Button, Modal } from 'react-bootstrap';
import foto1 from "./photo4.jpg";
import foto2 from "./photo2jpg.jpg";
import foto3 from "./photo1.jpg";
import fotoChiesa from "./Chiesa.jpg";
import palazzo from "./palazzo.jpg";
import regali from "./regali.jpg"
import contatti from "./contatti.jpg"


const NavbarBot = () => {
    const [nasc, setNasc] = useState(false)
    const [x, setX] = useState(false)

    //MODAL:
    const [show, setShow] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseClose = () => setShowContacts(false);
    const handleShow = () => setShow(true);
    const handleShowClose = () => setShowContacts(true);


    const setNascAndX = () => {
        setNasc(false)
        setX(false)
    }

    console.log(nasc)

    return (

        <>
            <DeviceOrientation lockOrientation={'landscape'} className="">
                {/* Will only be in DOM in landscape */}
                <Orientation orientation='landscape' alwaysRender={false} >
                    <div className=" fixed-top-mobile2 backColoreTot">
                        <div className="mx-4 my-2 d-flex justify-content-between align-items-center ">
                            <div to="/">
                                <img style={{ width: "50px" }} src={Logo} alt="" />
                            </div>
                            <div to="/">
                                <h5>21 Maggio 2022</h5>
                            </div>
                            <div className="menu-btn" onClick={() => setNasc(!nasc)}>
                                <div className={nasc ? "close1" : " btn-line "}></div>
                                <div className={nasc ? "close2" : " btn-line "}></div>
                                <div className={nasc ? "close3" : " btn-line "}></div>
                            </div>
                            {/* <Button

                        style={{ minWidth: "50px", backgroundColor: "#009fda", border: "none", }}
                        onClick={() => setNasc(!nasc)}
                    >
                        {!nasc ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
                    </Button> */}
                        </div>
                    </div>
                    <div className={(nasc || x) ? " transform-active2  text-center" : "  transform text-center"}>
                        <div style={{ textDecoration: "none", color: "black", }} to="/" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section1"> <h3 className="py-2">Home</h3></a>
                        </div>
                        <div style={{ textDecoration: "none", color: "black", }} to="/fotocamera" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section2"> <h3 className="py-2">Chiesa</h3></a>
                        </div>
                        <div style={{ textDecoration: "none", color: "black", }} to="/Rifiuti" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section3"> <h3 className="py-2">Sala Ricevimento</h3></a>
                        </div>
                        <div style={{ textDecoration: "none", color: "black", }} to="/Supporto" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section4"> <h3 className="py-2">Fai un regalo</h3></a>
                        </div>
                         <div style={{ textDecoration: "none", color: "black", }} to="/Supporto" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section5"> <h3 className="py-2">Contatti</h3></a>
                        </div>

                    </div>

                </Orientation>
                {/* Will stay in DOM, but is only visible in portrait */}
                <Orientation orientation='portrait' alwaysRender={false} className="" >
                    <div className=" fixed-top-mobile backColoreTot">
                        <div className="mx-4 my-2 d-flex justify-content-between align-items-center ">
                            <div to="/">
                                <img style={{ width: "50px" }} src={Logo} alt="" />
                            </div>
                              <div to="/">
                                <h5>21 Maggio 2022</h5>
                            </div>
                            <div className="menu-btn" onClick={() => setNasc(!nasc)}>
                                <div className={nasc ? "close1" : " btn-line "}></div>
                                <div className={nasc ? "close2" : " btn-line "}></div>
                                <div className={nasc ? "close3" : " btn-line "}></div>
                            </div>
                            {/* <Button

                        style={{ minWidth: "50px", backgroundColor: "#009fda", border: "none", }}
                        onClick={() => setNasc(!nasc)}
                    >
                        {!nasc ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
                    </Button> */}
                        </div>
                    </div>
                    <div className={(nasc || x) ? " transform-active  text-center" : "  transform text-center"}>
                        <div style={{ textDecoration: "none", color: "black", }} to="/" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section1"> <h3 className="py-2">Home</h3></a>
                        </div>
                        <div style={{ textDecoration: "none", color: "black", }} to="/fotocamera" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section2"> <h3 className="py-2">Chiesa</h3></a>
                        </div>
                        <div style={{ textDecoration: "none", color: "black", }} to="/Rifiuti" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section3"> <h3 className="py-2">Sala Ricevimento</h3></a>
                        </div>
                        <div style={{ textDecoration: "none", color: "black", }} to="/Supporto" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section4"> <h3 className="py-2">Fai un regalo</h3></a>
                        </div>
                         <div style={{ textDecoration: "none", color: "black", }} to="/Supporto" className=" " onClick={() => setNasc(!nasc)}>
                            <a href="#section5"> <h3 className="py-2">Contatti</h3></a>
                        </div>
                        

                    </div>
                </Orientation>
            </DeviceOrientation>
            

            <div class="" id="section1">
                <div>
                    <div style={{height:"55px"}}></div>
                    <Carousel >
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={foto2}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Benvenuti al Matrimonio di Serena e Filippo</h3>
                                <h5>21 Maggio 2022</h5>
                                <p>Scorri in basso per scopire tutte le  info</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={foto1} alt="Second slide"

                            />
                            <Carousel.Caption>
                                <h3>Benvenuti al Matrimonio di Serena e Filippo</h3>
                                <h5>21 Maggio 2022</h5>
                                <p>Scorri in basso per scopire tutte le  info</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={foto3} alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Benvenuti al Matrimonio di Serena e Filippo</h3>
                                <h4>21 Maggio 2022</h4>
                                <p>Scorri in basso per scopire tutte le  info</p>
                                <div class="" id="section2"></div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                     <div class="" id="section2"></div>
                 </div>
            </div>

            <div style={{height:"2px"}}></div>

           
                
               <div class="container">
                    <img src={fotoChiesa} style={{filter: "brightness(65%)"}} alt="Cinque Terre" className="imgChiesa" />
                    
                    <div class="center_chiesa">                          
                     <h2 style={{color:"white"}}> Ti aspettiamo in chiesa alle 15:00</h2>
                    </div>

                    <div class="center">

                        <a href="https://goo.gl/maps/5xLYRntxUUdAYbX39" style={{color:"white"}}>
                        <Button
                                            className=" rounded-pill"
                                            style={{
                                                minWidth: "122px",
                                                borderColor: "#009fda",

                                                backgroundColor: "#009fda",
                                                

                                            }}>
                                            Naviga verso la Chiesa
                                            <i className="fas fa-directions ml-2"></i>
                                        </Button>
                        </a>
                        
                        
                    </div>
                </div>

           

            <div style={{height:"2px"}}></div>

            <div class="" id="section3">
                
               <div class="container">
                    <img src={palazzo} alt="Cinque Terre" className="imgChiesa" />
                    
                    

                    <div class="center">

                        

                        <a href="https://goo.gl/maps/afLab1RzjSuB9UJC7" style={{color:"white"}}>
                        <Button
                                            className=" rounded-pill"
                                            style={{
                                                minWidth: "122px",
                                                borderColor: "#009fda",

                                                backgroundColor: "#009fda"

                                            }}>
                                            Naviga verso la Sala 
                                            <i className="fas fa-directions ml-2"></i>
                                        </Button>
                        </a>
                        
                        
                    </div>
                </div>

            </div>


            <div style={{ height: "2px" }}></div>

             <div class="" id="section4">
                
               <div class="container">
                    <img src={regali} alt="Cinque Terre"  className="imgChiesa"/>
                    <div class="center2">

                        
                        <Button
                                            className=" rounded-pill"
                                            style={{
                                                minWidth: "122px",
                                                borderColor: "#C95D63",

                                                backgroundColor: "#C95D63"

                                }}
                                onClick={handleShow}
                            >
                                            Fai un Regalo
                                            <i class="fas fa-gift ml-2"></i>
                                        </Button>
                       
                        
                        
                    </div>
                </div>

            </div>

            <div style={{ height: "2px" }}></div>

           

      <Modal show={show} onHide={handleClose} style={{marginTop:"60px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Fai un regalo:</Modal.Title>
        </Modal.Header>
                <div className="ml-3">
                    <h3>IBAN e Intestatari:</h3>
                
                    <h5>IT49V0623009490000063612554</h5>
                    <h4>Serena Gianaroli e Filippo Dicecca</h4>
                <h4 style={{color:"blue"}}>NB: Non saranno accettati importi inferiori a 5000€</h4>
                </div>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Chiudi
          </Button>
          
        </Modal.Footer>
      </Modal>

             <div style={{ height: "2px" }}></div>

             <div class="" id="section5">
                
               <div class="container">
                    <img src={contatti} alt="Cinque Terre"  className="imgChiesa"/>
                    <div class="center">

                        
                        <Button
                                            className=" rounded-pill"
                                            style={{
                                                minWidth: "122px",
                                                borderColor: "#009fda",

                                                backgroundColor: "#009fda"

                                }}
                                onClick={handleShowClose}
                            >
                                            Contatti
                                            <i class="fas fa-phone-alt ml-2"></i>
                                        </Button>
                       
                        
                        
                    </div>
                </div>

            </div>

            <div style={{ height: "2px" }}></div>

           

      <Modal show={showContacts} onHide={handleCloseClose} style={{marginTop:"60px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Contatti:</Modal.Title>
        </Modal.Header>
                <div className="ml-3">
                    <h3>Serena:</h3>                
                    <h5>+393331233668</h5>
                     <h3>Filippo:</h3>                
                    <h5 className="mb-3">+393316247074</h5>
                    <h3>Residenza:</h3>
                     <h5>Viale Corsica 3 Milano 20133</h5>                
                    

                </div>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseClose}>
            Chiudi
          </Button>
          
        </Modal.Footer>
      </Modal>

            
            
            <FooterSmall/>
           







        </>
    )
}

export default NavbarBot
