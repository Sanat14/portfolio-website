  import React, { useState } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import { motion, AnimatePresence } from "framer-motion";
  import { Briefcase, GraduationCap, Trophy } from "lucide-react"; 
  import Particle from "../Particle";
  import Techstack from "./Techstack";
  import Aboutcard from "./AboutCard";
  import WorkExperience from "./WorkExperience";
  import Education from "./Education";
  import Hackathons from "./Hackathons";
  import laptopImg from "../../assets/about.png";

  function About() {
    const [activeTab, setActiveTab] = useState("null");

    return (
      <Container fluid className="about-section">
        <Particle />
        <Container>
          {/* Introduction Section */}
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={7} style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "50px" }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                A quick <strong className="purple">Introduction</strong> about myself
              </h1>
              <Aboutcard />
            </Col>
            <Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }} className="about-img">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>

          {/* Skills Section */}
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />

          {/* Tabs with Icons */}
          <Row style={{ justifyContent: "center", padding: "10px", marginTop: "20px" }}>
            <Col md={12} className="tab-container">
              {[
                { id: "work", label: "Work Experience", icon: <Briefcase size={20} /> },
                { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
                { id: "hackathons", label: "Hackathons", icon: <Trophy size={20} /> },
              ].map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-item-about ${activeTab === tab.id ? "active-tab" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon} <span>{tab.label}</span>
                </div>
              ))}
            </Col>
          </Row>

          {/* Animated Tab Content */}
          <Row style={{ justifyContent: "center", marginTop: "20px" }}>
            <Col md={12}>
              <AnimatePresence mode="wait">
                {activeTab === "work" && (
                  <motion.div
                    key="work"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <WorkExperience />
                  </motion.div>
                )}
                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Education />
                  </motion.div>
                )}
                {activeTab === "hackathons" && (
                  <motion.div
                    key="hackathons"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Hackathons />
                  </motion.div>
                )}
              </AnimatePresence>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  export default About;
