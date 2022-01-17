import React from 'react'
import { Carousel } from 'react-bootstrap';
import foto1 from "./photo4.jpg";
import foto2 from "./photo2jpg.jpg";
import foto3 from "./photo1.jpg";

const Prova = () => {
    return (
        <>
            <div>
                <Carousel style={{ marginTop: "50px" }}>
                    <Carousel.Item interval={2500}>
                        <img
                            className="d-block w-100"
                            src={foto2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Benvenuti al Matrimonio di Serena e Filippo</h3>
                            <p>Scorri in basso per scopire tutte le  info</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img
                            className="d-block w-100"
                            src={foto1} alt="Second slide"

                        />
                        <Carousel.Caption>
                            <h3>Benvenuti al Matrimonio di Serena e Filippo</h3>
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
                            <p>Scorri in basso per scopire tutte le  info</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    )
}

export default Prova
