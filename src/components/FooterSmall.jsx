import React from 'react'

import './FooterSmall.css';

const FooterSmall = () => {
    return (
        <div >
                <div className="footer-dark">
                    <footer>
                       
                                    
                                <h2 className="text-center mb-4">Sere&Fillo </h2>
                                
                               
                            <div className="col item social" style={{marginTop:"7px"}}>
                                <a ><i className="icon whiteIcon ion-social-facebook "></i></a>
                                <a ><i className="icon whiteIcon ion-social-instagram"></i></a>
                                <a ><i className="icon whiteIcon ion-social-twitter"></i></a>
                                <a ><i className="icon whiteIcon ion-social-linkedin"></i></a>                                
                                <a ><i className="fas whiteIcon fa-envelope"></i></a>
                            </div>
                            
                            <p className="copyright">Stefano Dicecca © 2021</p>
                        
                    </footer>
                </div>
            </div>
    )
}

export default FooterSmall
