import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I'm Baibhav, a passionate full-stack developer with a strong
              background in{" "}
              <b className="purple">
                JavaScript, TypeScript, React.js, and Node.js.
              </b>
              <br />
              <br />I have built scalable web applications and worked with{" "}
              <b className="purple">MongoDB, SQL, and cloud technologies</b> to
              develop efficient solutions.
              <br />
              <br />
              My areas of interest include{" "}
              <i>
                <b className="purple">
                  Web Development, AI/ML, and Scalable System Architecture.
                </b>
              </i>
              <br />
              <br />I have interned at multiple companies, participated in
              hackathons like{" "}
              <b className="purple">DEVSOC & Flipkart Grid 6.0</b>, and
              contributed to open-source projects.
              <br />
              <br />
              I’m always open to exciting opportunities, collaborations, and
              discussions on innovative tech solutions!
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg || "/placeholder.svg"}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let's connect! Feel free to{" "}
              <span className="purple">reach out</span> to me on any of the
              platforms below.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BaibhavSureka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Baibhav02890089"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/baibhavsureka/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/baibhav._.sureka/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
