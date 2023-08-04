import { Container, Row, Col } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Iomi",
            description: "A web app for free invoicing",
            imgUrl: projImg1
        },
        {
            title: "Hash Coin",
            description: "A very simple crypto mining app",
            imgUrl: projImg2
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
                                    <h2>Projects</h2>
                                    <p>Here are some of the projects I have worked on, as I am allowed and able to share them with you, I will update the list below</p>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Colour Sharp 2" />
        </section>
    );
}