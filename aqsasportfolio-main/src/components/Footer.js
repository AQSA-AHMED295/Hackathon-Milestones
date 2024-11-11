import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer fixed bottom-0">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>Aqsa</h1>
          </Col>
          <Col size={12} sm={6} className="text-center  items-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:aqsaahmed295@gmail.com"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://wa.me/+923303936146"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Aqsaahmed295"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
