import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {FaCalendarAlt, FaCircle } from "react-icons/fa";

function Education() {
  
  const [selected, setSelected] = useState(null);


  const education = [
    {
      id: 1,
      course: "BSc Computer Science with Data Science",
      school: "University College Dublin",
      date: "September 2021 - June 2025",
      skills: ["Java","Python", "C", "SQL", "Git", "Docker", "Agile Methodologies"],
      description: [
        "Relevant Coursework : Data Structures & Algorithms, Machine Learning, Deep Learning, Databases, Operating Systems, Computer Networks",
        "Grade Achieved : First Class Honours (1.1)"
      ]
    }
  ];

  return (
    <div className="education-container">
      <div className="education-list">
        {education.map((exp) => (
          <Card
            key={exp.id}
            className={`education-card ${
              selected === exp.id ? "selected" : ""
            }`}
            onClick={() => setSelected(exp.id)}
          >
            <Card.Body>
              <h4 style={{ display: "flex", alignItems: "center", marginBottom: "3px", color: "#c95bf5", fontWeight: "600" }}>{exp.course}</h4>
              <p className="text-white" style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                <span style={{ fontSize: "16px", fontWeight: "400" }}>{exp.school}</span>
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

export default Education;
