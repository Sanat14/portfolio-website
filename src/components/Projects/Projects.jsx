import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cascadia from "../../assets/Projects/cascadia.png";
import sentiment from "../../assets/Projects/sentiment.png";
import nba from "../../assets/Projects/Nba.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis"
              description="Unleashing the power of deep learning to decode emotions in movie reviews! Experimenting with an LSTM, custom Transformer and fine-tuned BERT Model, this project predicts sentiment with cutting-edge accuracy, offering a glimpse into how machines understand human opinions"
              ghLink="https://github.com/Sanat14/Sentiment-Analysis"
              techStack={["Python", "TensorFlow", "Keras"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nba}
              isBlog={false}
              title="NBA Project"
              description="Fueled by my passion for basketball, this project dives deep into player stats, team dynamics, and game trends to uncover insights that shape performance and strategies, answering key questions about the game's most exciting aspects."
              ghLink="https://github.com/Sanat14/nbaAnalysisProject"  
              techStack={["Python"]}           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cascadia}
              isBlog={false}
              title="Cascadia Board Game"
              description="Explore the wilderness of Cascadia from the comfort of your terminal—build habitats, place wildlife, and create the perfect ecosystem in this engaging command-line game!"
              ghLink="https://github.com/Sanat14/CascadiaBoardGame"
              techStack={["Java"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
