import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/expenses';

export const fetchExpenses = createAsyncThunk(
  'expenses/fetchExpenses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Error fetching expenses'
      );
    }
  }
);

export const addExpense = createAsyncThunk(
  'expenses/addExpense',
  async (expense, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, expense);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Error adding expense'
      );
    }
  }
);

export const updateExpense = createAsyncThunk(
  'expenses/updateExpense',
  async ({ id, updatedExpense }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedExpense);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Error updating expense'
      );
    }
  }
);

export const deleteExpense = createAsyncThunk(
  'expenses/deleteExpense',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Error deleting expense'
      );
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    clearExpensesError(state) {
      state.error = null;
    },
    resetExpensesState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload || [];
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message || 'Unknown error';
      })

      .addCase(addExpense.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message || 'Unknown error';
      })

      .addCase(updateExpense.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        const idx = state.items.findIndex((e) => e.id === updated?.id);
        if (idx !== -1) {
          state.items[idx] = updated;
        }
      })
      .addCase(updateExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message || 'Unknown error';
      })

      .addCase(deleteExpense.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((e) => e.id !== action.payload);
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error?.message || 'Unknown error';
      });
  },
});

export const { clearExpensesError, resetExpensesState } =
  expensesSlice.actions;

export default expensesSlice.reducer;
