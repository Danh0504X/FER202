import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getExpensesByUser,
  addExpenseApi,
  updateExpenseApi,
  deleteExpenseApi
} from '../services/expenseService';

export const fetchExpenses = createAsyncThunk(
  'expenses/fetchExpenses',
  async (userId) => {
    return await getExpensesByUser(userId);
  }
);

export const addExpense = createAsyncThunk(
  'expenses/addExpense',
  async (expense) => {
    return await addExpenseApi(expense);
  }
);

export const updateExpense = createAsyncThunk(
  'expenses/updateExpense',
  async ({ id, expense }) => {
    return await updateExpenseApi(id, expense);
  }
);

export const deleteExpense = createAsyncThunk(
  'expenses/deleteExpense',
  async (id) => {
    await deleteExpenseApi(id);
    return id;
  }
);

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    filterCategory: ''
  },
  reducers: {
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.expenses = action.payload;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const index = state.expenses.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.expenses[index] = action.payload;
        }
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(
          (item) => item.id !== action.payload
        );
      });
  }
});

export const { setFilterCategory } = expenseSlice.actions;
export default expenseSlice.reducer;