import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Exercise3ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const [submitted, setSubmitted] = useState(null);

  // 1 hàm dùng chung cho mọi input
  const handleChange = (e) => {
    const { name, value } = e.target; // name chính là key trong object form

    setForm({
      ...form,
      [name]: value, // cập nhật đúng field theo name
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <Container className="mt-4">
      <h4 className="mb-3">Exercise 3 - Form sản phẩm (1 object state)</h4>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên sản phẩm..."
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập giá..."
                name="price"
                value={form.price}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Danh mục</Form.Label>
              <Form.Select
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">-- Chọn danh mục --</option>
                <option value="phone">Điện thoại</option>
                <option value="laptop">Laptop</option>
                <option value="fashion">Thời trang</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button type="submit" variant="primary">
                Lưu sản phẩm
              </Button>
            </div>
          </Form>

          {submitted && (
            <div className="mt-4 p-3 border rounded">
              <h6>✅ Dữ liệu đã submit:</h6>
              <div><b>Tên:</b> {submitted.name}</div>
              <div><b>Giá:</b> {submitted.price}</div>
              <div><b>Danh mục:</b> {submitted.category}</div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
