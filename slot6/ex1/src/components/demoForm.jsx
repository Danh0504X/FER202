import React from "react";
import { Form, Button } from "react-bootstrap";

export default function DemoForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submit form!");
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "20px auto" }}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCheck">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Submit
      </Button>
    </Form>
  );
}
