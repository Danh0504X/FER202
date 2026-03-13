import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, updateExpense } from '../store/expenseSlice';

function ExpenseForm({ editingExpense, setEditingExpense }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    name: editingExpense?.name || '',
    amount: editingExpense?.amount || '',
    category: editingExpense?.category || '',
    date: editingExpense?.date || ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setForm({
      name: '',
      amount: '',
      category: '',
      date: ''
    });
    setError('');
    if (setEditingExpense) setEditingExpense(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.category.trim()) {
      setError('Name và Category không được để trống');
      return;
    }

    if (Number(form.amount) <= 0 || isNaN(form.amount)) {
      setError('Amount phải là số lớn hơn 0');
      return;
    }

    if (!form.date) {
      setError('Date không được để trống');
      return;
    }

    const payload = {
      ...form,
      amount: Number(form.amount),
      userId: user.id
    };

    if (editingExpense) {
      dispatch(updateExpense({ id: editingExpense.id, expense: payload }));
    } else {
      dispatch(addExpense(payload));
    }

    resetForm();
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{editingExpense ? 'Edit Expense' : 'Add Expense'}</Card.Title>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              name="amount"
              type="number"
              value={form.amount}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              type="text"
              value={form.category}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="submit" variant="primary">
              {editingExpense ? 'Update Expense' : 'Add Expense'}
            </Button>

            {editingExpense && (
              <Button variant="secondary" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ExpenseForm;