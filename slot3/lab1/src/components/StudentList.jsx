
import Student from './Student';
import { studentData } from '../data/StudentData';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../StudentList.css';




function StudentList() {
  return (
    <Container className="mt-3">
      <Row>
        {studentData.map((S) => (
          <Col key={S.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Student S={S} className="student-card" />

          </Col>
        ))}
      </Row>
    </Container>


  );
}

export default StudentList;
