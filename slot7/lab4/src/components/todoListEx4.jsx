// src/pages/Ex4Todo.jsx
import { useState } from "react";
import { Badge, Button, Card, Col, Container, Form, Row, Stack } from "react-bootstrap";
import "../styles/todo.css";

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function Ex4Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]); 
  const [touched, setTouched] = useState(false);

  const trimmed = text.trim();
  const isInvalid = touched && trimmed.length === 0;

  const addTodo = () => {
    setTouched(true);
    if (!trimmed) return;

    setTodos((prev) => [
      { id: uid(), title: trimmed, createdAt: new Date().toISOString() },
      ...prev,
    ]);
    setText("");
    setTouched(false);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div className="todoPage">
      <Container>
           <h4 className="mb-3">Exercise 4 - TODO LIST</h4>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="todoCard">
              <Card.Header className="todoHeader p-4">
                <h3 className="todoTitle">Todo List</h3>
                <p className="todoSub">Thêm công việc mới và xoá khi hoàn thành.</p>
              </Card.Header>

              <Card.Body className="p-4">
                <Form onSubmit={onSubmit}>
                  <Row className="g-2 align-items-start">
                    <Col xs={12} md={9}>
                      <Form.Control
                        className="todoInput"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={() => setTouched(true)}
                        placeholder="Nhập công việc… (Enter để thêm)"
                        aria-label="Todo input"
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

                <div className="mt-4 todoList">
                  {todos.length === 0 ? (
                    <div className="todoEmpty">Chưa có công việc nào. Thêm một việc mới nhé 👌</div>
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
                                <p className="todoText">{t.title}</p>
                              </div>
                              <div className="todoMeta">
                                {new Date(t.createdAt).toLocaleString()}
                              </div>
                            </div>

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
