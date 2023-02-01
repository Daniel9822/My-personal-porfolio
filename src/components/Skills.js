import javascript from "../assets/img/javascript.svg";
import nodejs from "../assets/img/nodejs.svg";
import react from "../assets/img/react.svg";
import redux from "../assets/img/redux.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import git from "../assets/img/git.svg";
import EM6 from "../assets/img/EM6.svg";
import sequelize from "../assets/img/sequelize.svg";
import postgres from "../assets/img/postgres.svg";
import express from "../assets/img/express.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Habilidades</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.<br></br> Lorem Ipsum
                                has been the industry's standard dummy text.
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                {/* <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div> */}
                                <div className="item">
                                    <img src={html} alt="html" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="css" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="javascript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="react" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="nodejs" />
                                    <h5>Nodejs</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="redux" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item express">
                                    <img src={express} alt="express" />
                                    <h5>Express</h5>
                                </div>
                                <div className="item express">
                                    <img src={EM6} alt="ES6" />
                                    <h5>ES6</h5>
                                </div>
                                <div className="item">
                                    <img src={sequelize} alt="sequalize" />
                                    <h5>Sequalize</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="redux toolkit" />
                                    <h5>Redux Toolkit</h5>
                                </div>
                                <div className="item">
                                    <img src={postgres} alt="postgres" />
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="git" />
                                    <h5>Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="background"
            />
        </section>
    );
};
