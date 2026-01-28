import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

export default function QuantityEditor() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () =>
    setQuantity((prev) => (prev - 1 < 0 ? 0 : prev - 1));

  const handleChange = (e) => {
    // input type="number" vẫn có thể trả về chuỗi rỗng ""
    const raw = e.target.value;

    // Cho phép người dùng xoá hết để nhập lại
    if (raw === "") {
      setQuantity(0);
      return;
    }

    const value = Number(raw);

    // Nếu nhập không hợp lệ (NaN) hoặc âm -> về 0
    if (Number.isNaN(value) || value < 0) {
      setQuantity(0);
      return;
    }

    // Hợp lệ
    setQuantity(value);
  };

  return (
    <Container className="mt-4">
      <h4 className="mb-3">Exercise 1 - Chỉnh sửa số lượng</h4>

      <Row className="justify-content-center">
        <Col md={6}>
          <InputGroup>
            <Button variant="secondary" onClick={decrease}>
              -
            </Button>

            <Form.Control
              type="number"
              min={0}
              value={quantity}
              onChange={handleChange}
              className="text-center"
            />

            <Button variant="primary" onClick={increase}>
              +
            </Button>
          </InputGroup>

          <div className="mt-3 p-3 border rounded">
            <b>Số lượng hiện tại:</b> {quantity}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
