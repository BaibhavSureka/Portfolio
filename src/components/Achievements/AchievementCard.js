import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { BsLink45Deg } from "react-icons/bs";

function AchievementCard(props) {
  return (
    <Card className="achievement-card-view">
      <Card.Body>
        <div className="d-flex align-items-center mb-3">
          <div className="achievement-icon mr-3 purple">{props.icon}</div>
          <Card.Title className="mb-0">{props.title}</Card.Title>
        </div>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link && (
          <Button
            variant="primary"
            href={props.link}
            target="_blank"
            className="mt-2"
          >
            <BsLink45Deg /> View More
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;
