import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function About({ data }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.avatar} />
      <Card.Body>
        <Card.Title>
          {data.id} - {data.name}
        </Card.Title>
        <Card.Text>Age: {data.age}</Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
}
