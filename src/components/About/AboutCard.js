import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Baibhav Sureka </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently pursuing Btech in Computer Science and Engineering at
            VIT VELLORE.
            <br />I specialize in technologies like{" "}
            <span className="purple">Java, C++, React.js, and Node.js.</span>
            I am particularly passionate about building scalable web
            applications and solving complex algorithmic challenges.
            <br />
            <br />
            In addition to coding, I enjoy the following activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
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
