import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>  
            I am currently in my Final year studying <strong className="purple">Computer Science with Data Science</strong> at <strong className="purple">University College Dublin</strong>. 
            I am a passionate Software Engineer with a strong interest in Data Science. Currently playing around with ML/DL architectures  
            to build fun and innovative projects.  
            I am always eager to learn, adapt, and push the boundaries of technology.

            <br /><br />
            Besides Work and College I have a few hobbies :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports (Basketball and Cricket in particular)
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
