import React from "react";
import About from "./About";
import listOfStudent from "../listOfStudent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ListOfStudent() {
  return (
    <Container className="mt-3">
      <Row>
        {listOfStudent.map((student) => (
          <Col key={student.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <About data={student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListOfStudent;
