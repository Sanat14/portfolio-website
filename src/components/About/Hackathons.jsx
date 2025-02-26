import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {FaCalendarAlt, FaCircle } from "react-icons/fa";

function Hackathons() {
  
  const [selected, setSelected] = useState(null);

  // Work experience data
  const hackathons = [
    {
      id: 1,
      hackathon_name: "Capture the Flag (CTF)",
      organiser: "University of Galway",
      date: "February 2025",
      skills: ["Cryptography", "Stenography", "Reverse Engineering"],
      description: [
        "Solved problems related to cryptography, stenography, and reverse engineering",
      ],
      prize : "3rd place"
    },
    {
      id: 2,
      hackathon_name: "Huawei Tech Arena Hackathon",
      organiser: "Huawei",
      date: "October 2023",
      skills: ["Python", "Alpaca", "SQL"],
      description: [
        "As a team of 5, we leveraged Huawei's AI Cloud Service ModelArts and the alpaca LLM to develop an innovative AI assistant capable of converting natural language into SQL queries",
        "The model then returns relevant data in an easily comprehensible format based on the user's prompt",
        "Implemented rigorous measures in place to ensure the model responded appropriately to bad prompts and maintained data intgrity in the database being queried"
      ],
      prize : "3rd place"
    }
  ];

  return (
    <div className="hackathon-container">
      <div className="hackathon-list">
        {hackathons.map((exp) => (
          <Card
            key={exp.id}
            className={`hackathon-card ${
              selected === exp.id ? "selected" : ""
            }`}
            onClick={() => setSelected(exp.id)}
          >
            <Card.Body>
            <h4 className="text-white" style={{ display: "flex", alignItems: "center", marginBottom: "3px" }}>
              {exp.hackathon_name}
              {exp.prize && (
                <span style={{ marginLeft: 40, color: "#cd7f32" }}>
                  🏆{exp.prize}
                </span>
              )}
            </h4>
              <p className="text-white" style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                <span style={{ fontSize: "16px", fontWeight: "400" }}>{exp.organiser}</span>
              </p>
              <p className="text-white" style={{ display: "flex", alignItems: "center", fontSize: "14px"}}>
                <FaCalendarAlt className="me-2" style={{ display: "flex", alignItems: "center", color: "white" }} /> {exp.date}
              </p>
              <div className="badges">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="badge bg-secondary me-2" style={{ display: 'inline-block' }}>
                    {skill}
                  </span>
                ))}
              </div>
              <ul style={{ padding: 0, marginTop: "15px" }}>
                {exp.description.map((point, index) => (
                  <li 
                    key={index} 
                    style={{ 
                      display: "flex", 
                      alignItems: "flex-start", 
                      gap: "8px", 
                      marginBottom: "8px" 
                    }}
                  >
                    <FaCircle style={{ color: "white", fontSize: "8px", marginTop: "6px" }} />
                    <span style={{ fontSize: "14px", color: "white", textAlign: "left", flex: 1 }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Hackathons;
