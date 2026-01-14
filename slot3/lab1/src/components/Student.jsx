import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Student({ S }) {
  return (
    <Card className="student-card h-100">
      <Card.Img
        variant="top"
        src={S.avatar}
        className="student-avatar"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="student-title">
          {S.id} - {S.name}
        </Card.Title>

        <Card.Text className="student-text">
          Age: {S.age}
        </Card.Text>

        <Button variant="primary" className="mt-auto">
          See more
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Student;
