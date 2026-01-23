import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AboutUs() {
  const heroStyle = {
    background:
      'linear-gradient(135deg, rgba(0,0,0,0.65), rgba(0,0,0,0.35)), url("/images/1.jpg") center/cover no-repeat',
    padding: "95px 0",
    color: "white",
    marginBottom: "50px",
  };

  const pillStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 14px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.18)",
    marginBottom: 14,
    fontWeight: 800,
  };

  const sectionTitle = {
    fontSize: "2.2rem",
    fontFamily: "'Times New Roman', Times, serif",
    fontWeight: 900,
    color: "#111",
  };

  const subtleText = { color: "#6b7280", lineHeight: 1.75, fontSize: "1.05rem" };

  const cardStyle = {
    border: "1px solid #eee",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
    height: "100%",
    transition: "transform .15s ease, box-shadow .15s ease",
  };

  const values = [
    {
      icon: "🍕",
      title: "Quality Ingredients",
      desc:
        "Fresh dough daily, premium cheese, and farm vegetables. We pick ingredients that make every bite better.",
    },
    {
      icon: "🔥",
      title: "Perfectly Baked",
      desc:
        "High-heat baking for crispy crust, melty cheese, and balanced flavor—just like authentic Italian style.",
    },
    {
      icon: "❤️",
      title: "Made With Love",
      desc:
        "Our team cares about details. From the first knead to the final slice—quality is our promise.",
    },
  ];

  const reasons = [
    { title: "Fast delivery", desc: "Hot pizza delivered to your door in no time." },
    { title: "Easy ordering", desc: "Simple menu, clear prices, quick checkout." },
    { title: "Happy customers", desc: "Thousands of pizza lovers come back every week." },
    { title: "Great for events", desc: "Perfect for birthdays, parties, and gatherings." },
  ];

  return (
    <div style={{ background: "#ffffff" }}>
      {/* HERO */}
      <div style={heroStyle}>
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <div style={pillStyle}>
                <span style={{ fontSize: 18 }}>🍕</span>
                <span>Since 1995 • Authentic Taste</span>
              </div>

              <h1
                style={{
                  fontSize: "3.1rem",
                  fontWeight: 900,
                  marginBottom: 12,
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                About Pizza House
              </h1>

              <p style={{ fontSize: "1.1rem", maxWidth: 760, opacity: 0.92, marginBottom: 22 }}>
                We started with a small oven and a big dream: bring authentic Italian pizza to everyone.
                Today, we still bake with the same passion—fresh ingredients, handmade dough, and love in every slice.
              </p>

              <div className="d-flex gap-2 flex-wrap">
                <Button
                  as={Link}
                  to="/pizzas"
                  variant="danger"
                  style={{ fontWeight: 900, borderRadius: 12, padding: "10px 16px" }}
                >
                  View Menu
                </Button>

                <Button
                  as={Link}
                  to="/contact"
                  variant="outline-light"
                  style={{ fontWeight: 900, borderRadius: 12, padding: "10px 16px" }}
                >
                  Contact Us
                </Button>
              </div>
            </Col>

            {/* Stats box */}
            <Col lg={5}>
              <Card
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 16,
                  color: "#fff",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
                }}
              >
                <Card.Body style={{ padding: 18 }}>
                  <Row className="g-3">
                    {[
                      ["30+", "Years of experience"],
                      ["100K+", "Happy customers"],
                      ["50+", "Pizza recipes"],
                      ["4.9★", "Average rating"],
                    ].map(([big, small]) => (
                      <Col xs={6} key={small}>
                        <div style={{ fontSize: 28, fontWeight: 900 }}>{big}</div>
                        <div style={{ opacity: 0.9 }}>{small}</div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* STORY */}
      <Container style={{ padding: "30px 0 10px" }}>
        <Row className="justify-content-center mb-4">
          <Col md={10} lg={9}>
            <h2 style={{ ...sectionTitle, textAlign: "center", marginBottom: 14 }}>Our Story</h2>

            <p style={{ ...subtleText, textAlign: "center" }}>
              Pizza House was founded by Giovanni Rossi, a passionate chef from Naples, Italy.
              With family recipes passed down for generations, he opened a small shop with one goal:
              create honest pizza using traditional methods and the best ingredients.
            </p>

            <p style={{ ...subtleText, textAlign: "center", marginBottom: 0 }}>
              Today we’ve grown, but our promise stays the same: great taste, consistent quality, and warm service.
            </p>
          </Col>
        </Row>
      </Container>

      {/* VALUES */}
      <div style={{ background: "#f8fafc", padding: "55px 0", marginTop: 10 }}>
        <Container>
          <h2 style={{ ...sectionTitle, textAlign: "center", marginBottom: 36 }}>Our Values</h2>

          <Row className="g-4">
            {values.map((v) => (
              <Col md={4} key={v.title}>
                <Card
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 18px 34px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.10)";
                  }}
                >
                  <Card.Body className="text-center p-4">
                    <div style={{ fontSize: 34, marginBottom: 12 }}>{v.icon}</div>
                    <h4 style={{ fontWeight: 900, marginBottom: 10, color: "#111" }}>{v.title}</h4>
                    <p style={{ color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* WHY CHOOSE US */}
      <Container style={{ padding: "55px 0 70px" }}>
        <Row className="align-items-center g-4">
          <Col lg={6}>
            <h2 style={{ ...sectionTitle, marginBottom: 12 }}>Why choose us?</h2>
            <p style={{ ...subtleText, marginBottom: 18 }}>
              Whether you’re dining in or ordering at home, we focus on what matters most: taste, freshness, and service.
              We keep things simple, consistent, and delicious.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {reasons.map((r) => (
                <div
                  key={r.title}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 14,
                    padding: 14,
                    background: "#fff",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ fontWeight: 900, color: "#111", marginBottom: 6 }}>{r.title}</div>
                  <div style={{ color: "#6b7280", lineHeight: 1.6 }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={6}>
            <Card
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
              }}
            >
              <img
                src="/images/pizza2.jpg"
                alt="Pizza House"
                style={{ width: "100%", height: 360, objectFit: "cover" }}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
