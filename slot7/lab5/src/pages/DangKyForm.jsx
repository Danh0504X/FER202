import React, { useReducer, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialForm = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return initialForm;
    default:
      return state;
  }
}

// hàm validate trả về object errors
function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) errors.fullName = "Vui lòng nhập họ và tên";
  if (!form.email.trim()) errors.email = "Vui lòng nhập email";
  else {
    // check email cơ bản
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) errors.email = "Email không đúng định dạng";
  }

  if (!form.password) errors.password = "Vui lòng nhập mật khẩu";
  else if (form.password.length < 6)
    errors.password = "Mật khẩu tối thiểu 6 ký tự";

  if (!form.confirmPassword)
    errors.confirmPassword = "Vui lòng nhập xác nhận mật khẩu";
  else if (form.confirmPassword !== form.password)
    errors.confirmPassword = "Mật khẩu xác nhận không khớp";

  return errors;
}

export default function RegisterFormUseReducer() {
  const [form, dispatch] = useReducer(reducer, initialForm);

  // state lưu lỗi cho UI
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "CHANGE_INPUT",
      field: name,
      value,
    });

    // UX: user sửa field nào thì xoá lỗi field đó
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);

    // nếu có lỗi => không submit
    if (Object.keys(newErrors).length > 0) {
      toast.error("Vui lòng kiểm tra lại thông tin!");
      return;
    }

    toast.success("Đăng ký thành công ✅");
    dispatch({ type: "RESET_FORM" });
    setErrors({});
  };

  return (
    <Container className="mt-4">
      <ToastContainer position="top-right" autoClose={2000} />

      <h4 className="mb-3">Form Đăng ký tài khoản (useReducer + Validate)</h4>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} noValidate>
            {/* Họ tên */}
            <Form.Group className="mb-3">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ tên..."
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                isInvalid={!!errors.fullName}
              />
              {errors.fullName && (
                <div className="text-danger mt-1">{errors.fullName}</div>
              )}
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email..."
                name="email"
                value={form.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              {errors.email && (
                <div className="text-danger mt-1">{errors.email}</div>
              )}
            </Form.Group>

            {/* Mật khẩu */}
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu..."
                name="password"
                value={form.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              {errors.password && (
                <div className="text-danger mt-1">{errors.password}</div>
              )}
            </Form.Group>

            {/* Xác nhận mật khẩu */}
            <Form.Group className="mb-3">
              <Form.Label>Xác nhận mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập lại mật khẩu..."
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />
              {errors.confirmPassword && (
                <div className="text-danger mt-1">{errors.confirmPassword}</div>
              )}
            </Form.Group>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <Button variant="secondary" type="button" onClick={handleReset}>
                Reset
              </Button>

              <Button type="submit" variant="primary">
                Đăng ký
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
