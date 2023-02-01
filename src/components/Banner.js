import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
// import headerImg from "../assets/img/header-img.png";
import cv from "../assets/img/cv.pdf";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Full stack"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    {/* <span className="tagline">
                                        Bienvenido
                                    </span> */}
                                    <h1>
                                        {`Hola! mi nombre es Daniel, soy`}{" "}
                                        <span
                                            className="txt-rotate"
                                            dataPeriod="1000"
                                            data-rotate='[ "Web Developer", "Full stack" ]'
                                        >
                                            <span className="wrap">{text}</span>
                                        </span>
                                    </h1>
                                    <p>
                                        {" "}
                                        Soy un desarrollador full stack en busca
                                        de aventuras! 🚀 Acabo de terminar mi
                                        formación en desarrollo web full stack
                                        en Henry y estoy buscando nuevos
                                        desafíos para seguir aprendiendo y
                                        mejorando mis habilidades. Mi objetivo
                                        es convertirme en un desarrollador full
                                        stack de alto nivel y brindar soluciones
                                        increíbles a través de mis habilidades y
                                        conocimientos.🤖 Soy un apasionado del
                                        aprendizaje continuo y estoy siempre
                                        buscando nuevos desafíos para mejorar.🔥
                                        Si quieres conectarte conmigo, ¡no dudes
                                        en enviarme una solicitud!
                                    </p>

                                    <a className="cv" download="CV" href={cv}>Mi CV ❤️</a>
                                    {/* <button
                                        onClick={() => console.log("connect")}
                                    >
                                        Let’s Connect{" "}
                                        <ArrowRightCircle size={25} />
                                    </button> */}
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                    <img src={headerImg} alt="Header Img" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
