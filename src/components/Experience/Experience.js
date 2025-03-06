import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here’s an overview of my professional journey so far.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              company="Aamby Valley City Limited"
              position="Software Developer Intern"
              duration="June 2024 - July 2024"
              description="Developed and optimized the Aamby Valley website using React.js, enhancing responsiveness and user experience. Implemented a Purchase Order Management Software, improving data handling and boosting system efficiency by 15%. Collaborated with cross-functional teams to streamline backend processes, reducing issue resolution time."
              location="Pune, Maharashtra"
            />
          </Col>
          <Col md={4} className="experience-card">
            <ExperienceCard
              company="RoboVITics Club, VIT"
              position="Web Development Mentor"
              duration="March 2023 - Present"
              description="Mentored over 30 junior students in modern web development technologies. Played a key role in organizing RoboWars, VIT’s largest tech event, attracting over 500 participants. Assisted in building web-based solutions for club activities."
              location="Vellore, India"
            />
          </Col>
          <Col md={4} className="experience-card">
            <ExperienceCard
              company="Anti-Drug Club, VIT"
              position="Zonal Technical Member"
              duration="December 2024 - Present"
              description="Led technical initiatives for anti-drug awareness campaigns, educating local communities through digital platforms and events. Managed the technical aspects of various awareness programs, ensuring seamless execution."
              location="Vellore, India"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
