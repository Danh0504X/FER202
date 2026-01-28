import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function SimpleFormUseState() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ username, age });
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-3">Form test useState</h3>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3 justify-content-center">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập tuổi..."
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button type="submit" variant="primary">
                Gửi dữ liệu
              </Button>
            </div>
          </Col>
        </Row>
      </Form>

      {submittedData && (
        <div className="mt-4 p-3 border rounded">
          <h5>Dữ liệu đã gửi:</h5>
          <p className="mb-1">
            <b>Username:</b> {submittedData.username}
          </p>
          <p className="mb-0">
            <b>Age:</b> {submittedData.age}
          </p>
        </div>
      )}
    </Container>
  );
}
