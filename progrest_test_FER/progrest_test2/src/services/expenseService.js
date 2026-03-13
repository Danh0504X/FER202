import api from './api';

export const getExpensesByUser = async (userId) => {
  const response = await api.get('/expenses');

  const expenses = Array.isArray(response.data) ? response.data : [];

  return expenses.filter((item) => String(item.userId) === String(userId));
};

export const addExpenseApi = async (expense) => {
  const response = await api.post('/expenses', {
    ...expense,
    userId: String(expense.userId)
  });
  return response.data;
};

export const updateExpenseApi = async (id, expense) => {
  const response = await api.put(`/expenses/${id}`, {
    ...expense,
    userId: String(expense.userId)
  });
  return response.data;
};

export const deleteExpenseApi = async (id) => {
  await api.delete(`/expenses/${id}`);
  return id;
};