import React, { useReducer, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

/* 1. Initial State: Object duy nhất chứa toàn bộ form */
const initialState = {
  name: "",
  price: "",
  category: "",
};

/* 2. Reducer xử lý Action */
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.field]: action.value, // spread + cập nhật đúng field
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export default function Exercise3ProductForm() {
  /* 3. useReducer quản lý form */
  const [form, dispatch] = useReducer(reducer, initialState);

  /* Submitted data để hiển thị */
  const [submitted, setSubmitted] = useState(null);

  /* 4. Handle Change Input */
  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "CHANGE_INPUT",
      field: name,   // field chính là key
      value: value,  // value người dùng nhập
    });
  };

  /* 5. Submit Form */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  /* 6. Reset Form */
  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
    setSubmitted(null);
  };

  return (
    <Container className="mt-4">
      <h4 className="mb-3">
        Exercise 3 - Form Quản lý sản phẩm (useReducer Object State)
      </h4>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            {/* Tên sản phẩm */}
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

            {/* Giá */}
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

            {/* Danh mục */}
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

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <Button variant="secondary" type="button" onClick={handleReset}>
                Reset Form
              </Button>

              <Button type="submit" variant="primary">
                Lưu sản phẩm
              </Button>
            </div>
          </Form>

          {/* Hiển thị dữ liệu submit */}
          {submitted && (
            <div className="mt-4 p-3 border rounded">
              <h6>✅ Dữ liệu đã submit:</h6>
              <div>
                <b>Tên:</b> {submitted.name}
              </div>
              <div>
                <b>Giá:</b> {submitted.price}
              </div>
              <div>
                <b>Danh mục:</b> {submitted.category}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
