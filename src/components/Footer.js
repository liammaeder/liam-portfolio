import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={1}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={11} className="text-center text-sm-end">
                        <SocialIcons />
                        <p>Copyright {year}. All Rights Reserved by Liam Maeder</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}