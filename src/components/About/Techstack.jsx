import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscAzure } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { DiReact, DiPython, DiGit, DiJava, DiDotnet } from "react-icons/di";
import { SiMysql, SiTensorflow } from "react-icons/si";
import {Tooltip} from "react-tooltip";

function Techstack() {
  return (
    <>
      {/* Initialize Tooltip */}
      <Tooltip id="tooltip" place="top" effect="solid" className="custom-tooltip" delayShow={200} delayHide={200}/>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandCSharp data-tooltip-id="tooltip" data-tooltip-content="C#" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython data-tooltip-id="tooltip" data-tooltip-content="Python" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava data-tooltip-id="tooltip" data-tooltip-content="Java" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiDotnet data-tooltip-id="tooltip" data-tooltip-content=".NET" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact data-tooltip-id="tooltip" data-tooltip-content="React" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow data-tooltip-id="tooltip" data-tooltip-content="TensorFlow" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit data-tooltip-id="tooltip" data-tooltip-content="Git" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <VscAzure data-tooltip-id="tooltip" data-tooltip-content="Azure" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql data-tooltip-id="tooltip" data-tooltip-content="MySQL" />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
