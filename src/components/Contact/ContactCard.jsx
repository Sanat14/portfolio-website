import React from "react";
import Card from "react-bootstrap/Card";
import mailLogo from "../../assets/mail-icon.svg";
import { FaLinkedinIn } from "react-icons/fa";

function ContactCard() {
  return (
    <Card className="quote-card-view">  
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <ul className="footer-icons"  style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem", padding: 0, listStyle: "none" }}>
            <li className="social-icons">
                <a
                    href="mailto:dusadsanat@gmail.com"
                    style={{ color: "red" }}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon"
                    >
                    <img 
                        src={mailLogo}
                        alt="Gmail"
                        style={{ width: "3rem", height: "3rem" }} 
                    />
                </a>
            </li>
            <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/sanat-dusad/"
                    style={{ color: "blue" }}
                    target="_blank" 
                    rel="noreferrer"
                    className="contact-icon"
                >
                    <FaLinkedinIn style={{ fontSize: "3rem" }} />
                </a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;