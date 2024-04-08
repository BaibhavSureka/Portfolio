import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vortex360 from "../../Assets/Projects/vortex.jpg";
import legally from "../../Assets/Projects/legally.jpg";
import robowars from "../../Assets/Projects/robowars.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legally}
              isBlog={false}
              title="Legally"
              description="Introducing Legally: Your personal legal companion. Built with React.js, Material-UI, and Firebase, Legally offers a seamless platform for real-time messaging, resource sharing, and hanging out with friends. Empower yourself with features for instant messaging, image sharing, and message reactions."
              ghLink="https://github.com/BaibhavSureka/Legally__"
              demoLink="https://legally.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vortex360}
              isBlog={false}
              title="Vortex360"
              description="Introducing Vortex360: A React-powered hackathon hub. With servers for seamless interaction, dive into a dynamic dashboard. Explore our captivating 3D logo crafted with 3js or Framer Motion. Join us in revolutionizing hackathons!"
              ghLink="https://github.com/BaibhavSureka/Vortex-360-Event--2024"
              demoLink="https://enchanting-swan-8e8d4b.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robowars}
              isBlog={false}
              title="Robowars"
              description="Explore RoboVITics' Robowars website: your hub for annual events, projects, workshops, and community engagement, crafted with HTML, CSS, JavaScript, and Bootstrap. Join us in the robotics world!"
              ghLink="https://github.com/BaibhavSureka/Robowars"
              demoLink="https://robowars.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
