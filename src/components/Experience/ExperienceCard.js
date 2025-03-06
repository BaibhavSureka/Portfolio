import Card from "react-bootstrap/Card";
import { MdLocationOn } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <Card.Title className="purple">{props.company}</Card.Title>
        <Card.Subtitle className="mb-2 text-white font-weight-bold">
          {props.position}
        </Card.Subtitle>
        <div className="mt-3 mb-3 d-flex align-items-center text-muted">
          <BsCalendarDate className="mr-2" />
          <span className="ml-2">{props.duration}</span>
        </div>
        <div className="mb-3 d-flex align-items-center text-muted">
          <MdLocationOn className="mr-2" />
          <span className="ml-2">{props.location}</span>
        </div>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
