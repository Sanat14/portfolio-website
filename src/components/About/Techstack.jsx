import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import {
  DiReact,
  DiPython,
  DiGit,
  DiJava,
  DiDotnet
  
} from "react-icons/di";
import {
  SiMysql,
  SiTensorflow
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
         <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

    </Row>
  );
}

export default Techstack;
