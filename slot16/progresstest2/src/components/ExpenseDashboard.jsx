import React, { useEffect, useMemo, useState } from 'react';
import { Container, Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExpense,
  deleteExpense,
  fetchExpenses,
  updateExpense,
} from '../redux/slices/expensesSlice';
import FooterExpenses from './FooterExpenses';
import ModalConfirm from './ModalConfirm';
import { formatCurrency, formatDate } from '../utils/formatters';
import NavbarExpenses from './NavbarExpenses';

function ExpensesDashboard() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { items: allExpenses, loading, error } = useSelector(
    (state) => state.expenses
  );

  const [filterCategory, setFilterCategory] = useState('All categories');
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: 'Food',
    date: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      dispatch(fetchExpenses());
    }
  }, [user, dispatch]);

  const expenses = useMemo(
    () => allExpenses.filter((e) => e.userId === user?.id),
    [allExpenses, user]
  );

  const categories = [...new Set(expenses.map((e) => e.category))];

  const filteredExpenses =
    filterCategory === 'All categories'
      ? expenses
      : expenses.filter((e) => e.category === filterCategory);

  const totalExpenses = filteredExpenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.amount || Number(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0.';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required.';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      amount: '',
      category: 'Food',
      date: '',
    });
    setEditingId(null);
    setValidated(false);
    setErrors({});
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    setValidated(true);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const expenseData = {
        ...formData,
        userId: user.id,
        amount: Number(formData.amount),
      };

      if (editingId) {
        await dispatch(
          updateExpense({ id: editingId, updatedExpense: expenseData })
        ).unwrap();
      } else {
        await dispatch(addExpense(expenseData)).unwrap();
      }

      handleReset();
    } catch (error) {
      console.error('Error saving expense:', error);
    }
  };

  const handleEdit = (expense) => {
    setFormData({
      name: expense.name,
      amount: expense.amount,
      category: expense.category,
      date: expense.date,
    });
    setEditingId(expense.id);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await dispatch(deleteExpense(deleteId)).unwrap();
      setShowModal(false);
      setDeleteId(null);

      if (editingId === deleteId) {
        handleReset();
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarExpenses />

      <Container className="my-4 flex-grow-1">
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <h5>Total of Expenses</h5>
                <p className="fs-5">{formatCurrency(totalExpenses)}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Body>
                <h5>Filter</h5>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  disabled={loading}
                >
                  <option>All categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h5>{editingId ? 'Edit Expense' : 'Add Expense'}</h5>

                <Form noValidate onSubmit={handleSave}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={loading}
                      isInvalid={validated && !!errors.name}
                      isValid={validated && !errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row className="mb-3">
                    <Col>
                      <Form.Label>Amount</Form.Label>
                      <Form.Control
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        disabled={loading}
                        isInvalid={validated && !!errors.amount}
                        isValid={validated && !errors.amount}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.amount}
                      </Form.Control.Feedback>
                    </Col>

                    <Col>
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        disabled={loading}
                      >
                        <option value="Food">Food</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Mua sắm">Mua sắm</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      disabled={loading}
                      isInvalid={validated && !!errors.date}
                      isValid={validated && !errors.date}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.date}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-flex gap-2">
                    <Button variant="secondary" onClick={handleReset}>
                      Reset
                    </Button>
                    <Button variant="primary" type="submit" disabled={loading}>
                      {loading ? 'Saving...' : 'Save'}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card>
              <Card.Body>
                <h5>Expense Management</h5>
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredExpenses.map((expense) => (
                      <tr key={expense.id}>
                        <td>{expense.name}</td>
                        <td>{formatCurrency(expense.amount)}</td>
                        <td>{expense.category}</td>
                        <td>{formatDate(expense.date)}</td>
                        <td>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(expense)}
                            disabled={loading}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDeleteClick(expense.id)}
                            disabled={loading}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <FooterExpenses />

      <ModalConfirm
        show={showModal}
        title="Confirm Delete"
        message="Are you sure you want to delete this expense?"
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
}

export default ExpensesDashboard;