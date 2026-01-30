import React, { useReducer } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

// 1. Khởi tạo state theo đề bài
const initialState = { count: 0 };

// 2. Reducer xử lý các action
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 < 0 ? 0 : state.count - 1 };

    case "SET_INPUT":
      return { count: action.payload };

    default:
      return state;
  }
}

export default function QuantityEditor() {
  // 3. useReducer thay cho useState
  const [state, dispatch] = useReducer(reducer, initialState);

  // Tăng số lượng
  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  // Giảm số lượng (không âm)
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };


  const handleChange = (e) => {
    const raw = e.target.value;

    if (raw === "") {
      dispatch({ type: "SET_INPUT", payload: 0 });
      return;
    }

    const value = Number(raw);


    if (Number.isNaN(value) || value < 0) {
      dispatch({ type: "SET_INPUT", payload: 0 });
      return;
    }

    dispatch({ type: "SET_INPUT", payload: value });
  };

  return (
    <Container className="mt-4">
      <h4 className="mb-3">Exercise 1 - Chỉnh sửa số lượng (useReducer)</h4>

      <Row className="justify-content-center">
        <Col md={6}>
          <InputGroup>
            {/* Button giảm */}
            <Button variant="secondary" onClick={decrease}>
              -
            </Button>

            {/* Input nhập trực tiếp */}
            <Form.Control
              type="number"
              min={0}
              value={state.count}
              onChange={handleChange}
              className="text-center"
            />

            {/* Button tăng */}
            <Button variant="primary" onClick={increase}>
              +
            </Button>
          </InputGroup>

          {/* Hiển thị kết quả */}
          <div className="mt-3 p-3 border rounded">
            <b>Số lượng hiện tại:</b> {state.count}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
