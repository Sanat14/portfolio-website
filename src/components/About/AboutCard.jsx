import React from "react";
import Card from "react-bootstrap/Card";
import { FaBasketballBall, FaGamepad} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { GiPokerHand } from 'react-icons/gi';


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>  

            I am currently working as a <strong className="purple">Software Engineer</strong> at <strong className="purple">Microsoft</strong>. Outside of work, I have a strong interest in Data Science and love tinkering with machine learning and deep learning models just for the fun of it. 
            Whether it's building cool side projects, trying out new architectures, or just exploring what's possible with AI, I'm always up for learning something new and turning ideas into reality.
            <br /><br />
            I also have a few hobbies :
          </p>
          <ul>
            <li className="about-activity">
              <FaBasketballBall style={{color: "#c95bf5"}} /> &nbsp; Sports (Basketball and Cricket in particular)
            </li>
            <li className="about-activity">
              <FaGamepad  style={{color: "#c95bf5"}}/> &nbsp; Gaming
            </li>
            <li className="about-activity">
              <GiPokerHand style={{color: "#c95bf5"}} /> &nbsp; Poker
            </li>
            <li className="about-activity">
              <MdLocationOn style={{color: "#c95bf5"}} /> &nbsp; Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
