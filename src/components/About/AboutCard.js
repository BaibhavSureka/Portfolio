import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Baibhav Sureka</span>{" "}
            from <span className="purple">Bihar, India.</span>
            <br />I am currently pursuing a B.Tech in{" "}
            <b className="purple">Computer Science and Engineering</b> at VIT
            Vellore.
            <br />
            <br />
            My expertise includes{" "}
            <b className="purple">
              JavaScript, TypeScript, React.js, Next.js, and Node.js.
            </b>
            I am passionate about building scalable web applications, optimizing
            backend performance, and exploring AI/ML.
            <br />
            <br />
            Some highlights of my journey:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Internship experience in full-stack development
              at multiple firms
            </li>
            <li className="about-activity">
              <ImPointRight /> Active participation in hackathons like DEVSOC &
              Flipkart Grid 6.0
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributed to open-source and research projects
            </li>
          </ul>
          <br />
          <p>Beyond coding, I enjoy:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
