import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cryptosage from "../../Assets/Projects/cryptosage.png";
import robowars from "../../Assets/Projects/robowars.png";
import legally from "../../Assets/Projects/legally.jpg";
import chatApp from "../../Assets/Projects/chat-app.png";
import cryptoForecast from "../../Assets/Projects/about.png";
import adaptiveLearning from "../../Assets/Projects/adaptive-learning.png";
import iopEstimation from "../../Assets/Projects/about.png";

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
              imgPath={cryptosage}
              isBlog={false}
              title="CryptoSage AI"
              description="AI-driven financial portfolio management system integrating blockchain for automated trading and portfolio optimization. Utilizes LSTM for market predictions and MetaMask for secure wallet connections."
              ghLink="https://github.com/BaibhavSureka/CryptoSage-AI"
              demoLink="https://dev-soc-2025.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="Real-time Chat Application"
              description="End-to-end real-time chat application built with React, Node.js, and Express. Features secure user authentication and efficient data management using MongoDB Atlas."
              ghLink="https://github.com/BaibhavSureka/chat-application"
              demoLink="https://chat-application-mu-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={legally}
              isBlog={false}
              title="Legally"
              description="AI-powered legal advisory platform that simplifies Indian legal processes. Reduces query resolution time by 40% using machine learning and NLP. Integrates FAISS for advanced data indexing."
              ghLink="https://github.com/BaibhavSureka/legally_"
              demoLink="https://legally.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robowars}
              isBlog={false}
              title="Robowars"
              description="Interactive platform for Robowars event with real-time match tracking and live scoring. Handles high traffic loads and improves engagement by 20% during live events."
              ghLink="https://github.com/BaibhavSureka/Robowars-2.0"
              demoLink="https://robowars.robovitics.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adaptiveLearning}
              isBlog={false}
              title="AI for Personalized Learning"
              description="An adaptive learning platform that uses AI to personalize educational content and learning paths for students, enhancing engagement and learning outcomes."
              ghLink="https://github.com/BaibhavSureka/Adaptive-Learning"
              demoLink="https://adaptive-learning-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoForecast}
              isBlog={false}
              title="Cryptocurrency Price Forecasting"
              description="ML project for forecasting cryptocurrency price trends using historical data from CoinGecko API. Leverages data metrics and regression analysis to predict future price changes."
              ghLink="https://github.com/BaibhavSureka/Cryptocurrency-Price-Prediction"
              demoLink="https://github.com/BaibhavSureka/Cryptocurrency-Price-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iopEstimation}
              isBlog={false}
              title="IOP Estimation (Glaucoma Detection)"
              description="ML-based project for predicting Intraocular Pressure (IOP), crucial for glaucoma detection. Processes sensor data, applies ML models, and provides insights via a Flask API."
              ghLink="https://github.com/BaibhavSureka/IOP-Estimation"
              demoLink="https://github.com/BaibhavSureka/IOP-Estimation"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
