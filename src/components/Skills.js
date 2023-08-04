import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JavaScriptImg from "../assets/img/javascript.svg";
import ReactImg from "../assets/img/react.svg";
import AngularImg from "../assets/img/angular.svg";
import ScrumImg from "../assets/img/scrum.svg";
import DockerImg from "../assets/img/docker.svg";
import GithubImg from "../assets/img/github.svg";
import PHPImg from "../assets/img/php.svg";
import TailwindImg from "../assets/img/tailwind.svg";
import BootstrapImg from "../assets/img/bootstrap.svg";
import MySqlImg from "../assets/img/mysql.svg";
import OutsystemsImg from "../assets/img/outsystems.svg";

import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

            <section className="skill" id="skills">
                <TrackVisibility>
                    {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="skill-bx wow zoomIn">
                                            <h2>Skills</h2>
                                            <p>
                                                Here are some of my skills and frameworks that I have accumulated over the years
                                                <br></br>
                                                They are ordered from my strongest to weakest knowledge.
                                            </p>
                                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                                <div className="item">
                                                    <img src={JavaScriptImg} />
                                                    <h5>JavaScript</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={BootstrapImg} />
                                                    <h5>Bootstrap</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={PHPImg} />
                                                    <h5>PHP</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={GithubImg} />
                                                    <h5>Github</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={MySqlImg} />
                                                    <h5>MySql</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={ScrumImg} />
                                                    <h5>Scrum</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={ReactImg} />
                                                    <h5>React</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={DockerImg} />
                                                    <h5>Docker</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={OutsystemsImg} />
                                                    <h5>Outsystems</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={TailwindImg} />
                                                    <h5>Tailwind CSS</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={AngularImg} />
                                                    <h5>Angular</h5>
                                                </div>
                                            </Carousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </TrackVisibility>
                <img className="background-image-left" src={colorSharp} />
            </section>
    );
}