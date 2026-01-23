import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Badge, Card } from "react-bootstrap";
import { pizzaList } from "../data/PizzaList";

function PizzaDetail() {
  const { id } = useParams();
  const pizza = pizzaList.find((p) => String(p.id) === String(id));

  if (!pizza) {
    return (
      <Container className="my-5">
        <h2>Pizza not found</h2>
        <Link to="/pizzas">← Back to Menu</Link>
      </Container>
    );
  }

  const handleBuy = () => {
    alert(`Bought: ${pizza.name} - $${pizza.price.toFixed(2)}`);
  };

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", padding: "40px 0" }}>
      <Container>
        <Link
          to="/pizzas"
          style={{
            textDecoration: "none",
            color: "#111",
            fontWeight: 700,
            display: "inline-block",
            marginBottom: 14,
          }}
        >
          ← Back to Menu
        </Link>

        <Card style={{ border: "1px solid #eee", borderRadius: 16, overflow: "hidden" }}>
          <Card.Body style={{ padding: 20 }}>
            <Row className="g-4 align-items-start">
              <Col md={6}>
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    maxHeight: 460,
                    objectFit: "cover",
                    border: "1px solid #f1f1f1",
                  }}
                />
              </Col>

              <Col md={6}>
                <h2 style={{ fontWeight: 900, color: "#111", marginBottom: 10 }}>
                  {pizza.name}
                </h2>

                {pizza.tags?.length > 0 && (
                  <div className="mb-3">
                    {pizza.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        bg={tag.toLowerCase() === "sale" ? "warning" : "success"}
                        className="me-2"
                        style={{ fontWeight: 800 }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <p style={{ color: "#6b7280", lineHeight: 1.7, marginBottom: 18 }}>
                  {pizza.description}
                </p>

                {/* Price (nhẹ nhàng, không quá đập) */}
                <div className="d-flex align-items-end gap-3 mb-4">
                  {pizza.oldPrice && (
                    <span
                      style={{
                        color: "#9ca3af",
                        textDecoration: "line-through",
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      ${pizza.oldPrice.toFixed(2)}
                    </span>
                  )}

                  <span
                    style={{
                      color: "#dc3545",
                      fontWeight: 800,
                      fontSize: 28,   // giảm size
                      lineHeight: 1,
                    }}
                  >
                    ${pizza.price.toFixed(2)}
                  </span>
                </div>

                {/* Buttons (đều, không quá to) */}
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    variant="danger"
                    onClick={handleBuy}
                    style={{
                      fontWeight: 800,
                      padding: "10px 18px",
                      borderRadius: 12,
                    }}
                  >
                    Buy Now
                  </Button>

                  <Button
                    as={Link}
                    to="/pizzas"
                    variant="outline-dark"
                    style={{
                      fontWeight: 800,
                      padding: "10px 18px",
                      borderRadius: 12,
                    }}
                  >
                    Continue Shopping
                  </Button>
                </div>

                {/* Extra info nhỏ gọn */}
                <div style={{ marginTop: 22 }}>
                  <h6 style={{ fontWeight: 900, color: "#111", marginBottom: 10 }}>
                    Additional Info
                  </h6>
                  <ul style={{ color: "#6b7280", lineHeight: 1.9, marginBottom: 0 }}>
                    <li>Fresh ingredients daily</li>
                    <li>Hand-tossed dough</li>
                    <li>Cooked in wood-fired oven</li>
                    <li>Available for delivery</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default PizzaDetail;
