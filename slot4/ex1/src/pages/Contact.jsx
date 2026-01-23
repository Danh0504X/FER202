import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been sent. We’ll reply soon 💌");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const infoCards = [
    {
      icon: "📍",
      title: "Visit our store",
      desc: "Come enjoy fresh pizza at our cozy place.",
      lines: ["123 Pizza Street", "New York, NY 10001", "United States"],
    },
    {
      icon: "📞",
      title: "Call us",
      desc: "We’re available every day from 10AM – 10PM.",
      lines: ["Phone: +1 (555) 123-4567", "Hotline: 1-800-PIZZA", "Support: +1 (555) 777-8888"],
    },
    {
      icon: "✉️",
      title: "Email",
      desc: "For orders, feedback, or partnership.",
      lines: ["orders@pizzahouse.com", "support@pizzahouse.com", "hello@pizzahouse.com"],
    },
  ];

  return (
    <div style={{ background: "#ffffff" }}>
      {/* HERO */}
      <div
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.35)), url("/images/7.jpg") center/cover no-repeat',
          padding: "90px 0",
          color: "#fff",
        }}
      >
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  marginBottom: 14,
                }}
              >
                <span style={{ fontSize: 18 }}>🍕</span>
                <span style={{ fontWeight: 800 }}>Pizza House Support</span>
              </div>

              <h1
                style={{
                  fontSize: "3.0rem",
                  fontWeight: 900,
                  marginBottom: 12,
                  fontFamily: "'Times New Roman', Times, serif",
                }}
              >
                Contact Us
              </h1>

              <p style={{ fontSize: "1.1rem", maxWidth: 720, marginBottom: 0, opacity: 0.92 }}>
                Need help with your order, want to book a table, or have feedback? Send us a message —
                we’ll get back to you as soon as possible.
              </p>
            </Col>

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
                  <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 10 }}>
                    Quick contact
                  </div>

                  <div style={{ display: "grid", gap: 8, opacity: 0.95 }}>
                    <div>📞 +1 (555) 123-4567</div>
                    <div>✉️ hello@pizzahouse.com</div>
                    <div>⏰ Open daily: 10:00 AM – 10:00 PM</div>
                  </div>

                  <div style={{ marginTop: 14 }}>
                    <Button
                      variant="danger"
                      href="mailto:hello@pizzahouse.com"
                      style={{ fontWeight: 800, borderRadius: 12, padding: "10px 14px" }}
                    >
                      Email Us
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CONTENT */}
      <Container style={{ padding: "48px 0 70px" }}>
        {/* INFO CARDS */}
        <Row className="g-4 mb-5">
          {infoCards.map((it, idx) => (
            <Col md={4} key={idx}>
              <Card
                className="h-100"
                style={{
                  border: "1px solid #eee",
                  borderRadius: 16,
                  boxShadow: "0 10px 26px rgba(0,0,0,0.08)",
                  transition: "transform .15s ease, box-shadow .15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 18px 34px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 26px rgba(0,0,0,0.08)";
                }}
              >
                <Card.Body style={{ padding: 20 }}>
                  <div style={{ fontSize: 34, marginBottom: 10 }}>{it.icon}</div>
                  <h4 style={{ fontWeight: 900, marginBottom: 6, color: "#111" }}>{it.title}</h4>
                  <p style={{ color: "#6b7280", marginBottom: 12 }}>{it.desc}</p>

                  <div style={{ color: "#374151", lineHeight: 1.7, fontWeight: 600 }}>
                    {it.lines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* FORM + MAP */}
        <Row className="g-4 align-items-stretch">
          {/* FORM */}
          <Col lg={6}>
            <Card
              className="h-100"
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
              }}
            >
              <Card.Body style={{ padding: 22 }}>
                <h2
                  style={{
                    fontSize: "2.0rem",
                    marginBottom: 16,
                    fontFamily: "'Times New Roman', Times, serif",
                    color: "#111",
                    fontWeight: 900,
                  }}
                >
                  Send a message
                </h2>

                <p style={{ color: "#6b7280", marginBottom: 18 }}>
                  Fill in the form and we’ll reply within 24 hours.
                </p>

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 700, color: "#111" }}>Name *</Form.Label>
                        <Form.Control
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          style={{ borderRadius: 12, padding: "10px 12px" }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 700, color: "#111" }}>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@email.com"
                          required
                          style={{ borderRadius: 12, padding: "10px 12px" }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 700, color: "#111" }}>Phone</Form.Label>
                        <Form.Control
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 555 123 4567"
                          style={{ borderRadius: 12, padding: "10px 12px" }}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 700, color: "#111" }}>Subject *</Form.Label>
                        <Form.Control
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Order / Booking / Feedback"
                          required
                          style={{ borderRadius: 12, padding: "10px 12px" }}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label style={{ fontWeight: 700, color: "#111" }}>Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your message..."
                          required
                          style={{ borderRadius: 12, padding: "10px 12px" }}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} className="d-flex gap-2 mt-2">
                      <Button
                        type="submit"
                        variant="danger"
                        style={{ fontWeight: 900, borderRadius: 12, padding: "11px 18px" }}
                      >
                        Send Message
                      </Button>

                      <Button
                        type="button"
                        variant="outline-dark"
                        onClick={() => setFormData({ name: "", email: "", phone: "", subject: "", message: "" })}
                        style={{ fontWeight: 900, borderRadius: 12, padding: "11px 18px" }}
                      >
                        Clear
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* MAP + HOURS */}
          <Col lg={6}>
            <Card
              className="h-100"
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
              }}
            >
              <div style={{ height: 320 }}>
                <iframe
                  title="Pizza House Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <Card.Body style={{ padding: 18 }}>
                <h4 style={{ fontWeight: 900, color: "#111", marginBottom: 12 }}>
                  Business Hours
                </h4>

                {[
                  ["Monday – Friday", "11:00 AM – 10:00 PM"],
                  ["Saturday", "10:00 AM – 11:00 PM"],
                  ["Sunday", "10:00 AM – 9:00 PM"],
                ].map(([l, r]) => (
                  <div key={l} className="d-flex justify-content-between mb-2">
                    <span style={{ fontWeight: 800, color: "#111" }}>{l}</span>
                    <span style={{ color: "#6b7280", fontWeight: 700 }}>{r}</span>
                  </div>
                ))}

                <div style={{ marginTop: 14, padding: 14, borderRadius: 14, background: "#f8fafc", border: "1px solid #eef2f7" }}>
                  <div style={{ fontWeight: 900, color: "#111", marginBottom: 6 }}>
                    Tip
                  </div>
                  <div style={{ color: "#6b7280", lineHeight: 1.6 }}>
                    Want faster support? Include your <b>order ID</b> in the subject line.
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
