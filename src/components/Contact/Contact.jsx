import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <Container fluid className="contact-section" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "3em", paddingBottom: "20px", marginTop: "250px" }}>
              <strong className="purple"> Feel free to reach out to me on</strong> :
            </h1>
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
