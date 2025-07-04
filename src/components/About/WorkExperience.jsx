import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import MsLogo  from "../../assets/CompanyLogos/Microsoft_logo.svg";
import AvayaLogo from "../../assets/CompanyLogos/avaya.png";
import {FaCalendarAlt, FaCircle } from "react-icons/fa";

function WorkExperience() {
  console.log("WorkExperience component rendered");

  const [selected, setSelected] = useState(null);

  // Work experience data
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Microsoft",
      companyLogo: MsLogo,
      date: "September 2025 - Present",
      skills: ["C#",".NET", "Microsoft Azure"],
      description: [
        
      ]
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "Microsoft",
      companyLogo: MsLogo,
      date: "June 2024 - September 2024",
      skills: ["C#",".NET", "Microsoft Azure"],
      description: [
        "Developed a way to fetch PR/Commit information from a given changed source file/binary/component in the Windows codebase.",
        "Enhanced the Payload Decision Service (PDS) UI, a tool used internally to predict fast build eligibility (where only changed source files, binaries, or components are built) for Windows code changes, adding detailed data on features and tests.",
        "Extracted data from PDS logs to create insightful charts that identified key issues and areas for improvement within PDS. These visualizations helped the team focus on critical aspects of the service."
      ]
    },
    {
      id: 3,
      role: "Site Reliability Engineer Intern",
      company: "Avaya",
      companyLogo: AvayaLogo,
      date: "July 2023 - September 2023",
      skills: ["Docker", "AWS", "SaaS"],
      description: [
        "Worked with Senior SREs on a service whereby Developers can automatically provision and maintain cloud-environments on Microsoft Azure according to their needs.",
        "Resolved tickets sent by clients using Avaya's AXP product (CCaaS) and ensured minimising downtime of the service by working together with other team members on fixing the issue as quickly as possible.",
        "Developed and deployed two simple Dockerized web apps to Azure Kubernetes Service (AKS), utilizing an Nginx ingress controller for external access."
      ]
    }
  ];

  return (
    <div className="work-container">
      <div className="experience-list">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            className={`experience-card ${
              selected === exp.id ? "selected" : ""
            }`}
            onClick={() => setSelected(exp.id)}
          >
            <Card.Body>
              <h4 style={{ display: "flex", alignItems: "center", marginBottom: "3px", color: "#c95bf5", fontWeight: "600"}}>{exp.role}</h4>
              <p className="text-white" style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                <img src={exp.companyLogo} alt={exp.company} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                <span style={{ fontSize: "16px", fontWeight: "400" }}>{exp.company}</span>
              </p>
              <p className="text-white" style={{ display: "flex", alignItems: "center", fontSize: "14px"}}>
                <FaCalendarAlt className="me-2" style={{ display: "flex", alignItems: "center", color: "white" }} /> {exp.date}
              </p>
              <div className="badges">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="badge bg-secondary me-2" style={{ display: 'inline-block', color: 'white'}}>
                    {skill}
                  </span>
                ))}
              </div>
              {exp.description.length > 0 && (
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
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
