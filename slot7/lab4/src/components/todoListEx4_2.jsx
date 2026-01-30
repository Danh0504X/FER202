// src/pages/Ex4Todo.jsx
import React, { useReducer, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import "../styles/todo.css";

/* Tạo id đơn giản */
function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

/* 1. Initial State: mảng tasks */
const initialState = [];

/* 2. Reducer xử lý ADD / DELETE */
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        { id: uid(), text: action.payload },
        ...state,
      ];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}

export default function Ex4Todo() {
  /* Input state */
  const [text, setText] = useState("");
  const [touched, setTouched] = useState(false);

  /* 3. useReducer quản lý todos */
  const [todos, dispatch] = useReducer(reducer, initialState);

  const trimmed = text.trim();
  const isInvalid = touched && trimmed.length === 0;

  /* 4. Add Task */
  const addTodo = () => {
    setTouched(true);

    if (!trimmed) return;

    dispatch({
      type: "ADD_TASK",
      payload: trimmed,
    });

    setText("");
    setTouched(false);
  };

  /* 5. Delete Task */
  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  /* Submit form */
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div className="todoPage">
      <Container>
        <h4 className="mb-3">Exercise 4 - TODO LIST (useReducer)</h4>

        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="todoCard">
              <Card.Header className="todoHeader p-4">
                <h3 className="todoTitle">Todo List</h3>
                <p className="todoSub">
                  Thêm công việc mới và xoá khi hoàn thành.
                </p>
              </Card.Header>

              <Card.Body className="p-4">
                {/* Form Add */}
                <Form onSubmit={onSubmit}>
                  <Row className="g-2 align-items-start">
                    <Col xs={12} md={9}>
                      <Form.Control
                        className="todoInput"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={() => setTouched(true)}
                        placeholder="Nhập công việc… (Enter để thêm)"
                        isInvalid={isInvalid}
                      />
                      <Form.Control.Feedback type="invalid">
                        Vui lòng nhập nội dung công việc.
                      </Form.Control.Feedback>
                    </Col>

                    <Col xs={12} md={3}>
                      <Button type="submit" className="todoAddBtn w-100">
                        Add Todo
                      </Button>
                    </Col>
                  </Row>
                </Form>

                {/* Todo List */}
                <div className="mt-4 todoList">
                  {todos.length === 0 ? (
                    <div className="todoEmpty">
                      Chưa có công việc nào. Thêm một việc mới nhé 👌
                    </div>
                  ) : (
                    <Stack gap={3} className="pt-3">
                      {todos.map((t, idx) => (
                        <div key={t.id} className="todoItem p-3">
                          <div className="d-flex justify-content-between align-items-start gap-3">
                            <div className="flex-grow-1">
                              <div className="d-flex align-items-center gap-2">
                                <Badge bg="primary" pill>
                                  #{idx + 1}
                                </Badge>

                                <p className="todoText">{t.text}</p>
                              </div>
                            </div>

                            {/* Delete Button */}
                            <Button
                              variant="outline-danger"
                              className="todoDeleteBtn"
                              onClick={() => deleteTodo(t.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </Stack>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
