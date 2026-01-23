import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PizzaCard from "../components/PizzaCard";
import { pizzaList } from "../data/PizzaList";

function PizzaList() {
  return (
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container>
        <div className="mb-4">
          <h2 style={{ color: "#111", fontWeight: 900, marginBottom: 6 }}>
            Our Menu
          </h2>
          <p style={{ color: "#6b7280", marginBottom: 0 }}>
            Choose your favorite pizza and enjoy the best taste.
          </p>
        </div>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {pizzaList.map((pizza) => (
            <Col key={pizza.id} className="d-flex">
              <PizzaCard item={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PizzaList;
