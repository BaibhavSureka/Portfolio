import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AchievementCard from "./AchievementCard";
import { FaTrophy, FaCode, FaTree, FaRankingStar } from "react-icons/fa6";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

function Achievements() {
  return (
    <Container fluid className="achievement-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my notable accomplishments and coding profiles
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="achievement-card">
            <AchievementCard
              icon={<FaCode />}
              title="Competitive Programming"
              description="Solved 600+ problems on LeetCode, Codeforces, and CodeChef."
              link="https://codolio.com/profile/Baibhav_Sureka"
            />
          </Col>
          <Col md={6} className="achievement-card">
            <AchievementCard
              icon={<FaTrophy />}
              title="Hackathon Success"
              description="Achieved 7th Position out of 300+ teams at DEVSOC 2024 Hackathon with the Legally project, an AI-powered legal advisory platform."
              link="https://github.com/BaibhavSureka/Legally__"
            />
          </Col>
          <Col md={6} className="achievement-card">
            <AchievementCard
              icon={<FaTree />}
              title="Hacktoberfest 2023"
              description="Completed Hacktoberfest 2023, with Tree Nation planting a tree in Tanzania under my name as a reward for open source contributions."
              link="https://tree-nation.com/profile/baibhav-sureka"
            />
          </Col>
          <Col md={6} className="achievement-card">
            <AchievementCard
              icon={<FaRankingStar />}
              title="Coding Profiles"
              description="Secured Rank 1,837 among 40,000 participants in LeetCode Weekly Contest 409. Achieved impressive ratings across multiple competitive coding platforms."
              link="https://leetcode.com/u/baibhavsureka/"
            />
          </Col>
        </Row>
        <h2 className="project-heading">
          My Coding <strong className="purple">Profiles </strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons">
            <a
              href="https://leetcode.com/BaibhavSureka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="purple" />
              <p>LeetCode</p>
              <p>Max: 1686</p>
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a
              href="https://www.codechef.com/users/baibhavv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodechef className="purple" />
              <p>CodeChef</p>
              <p>Max: 1612</p>
            </a>
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <a
              href="https://codeforces.com/profile/Baibhav_Sureka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodeforces className="purple" />
              <p>Codeforces</p>
              <p>Max: 1111</p>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
