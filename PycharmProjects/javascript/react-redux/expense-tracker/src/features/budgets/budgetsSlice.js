import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      state.map(budget => {
        if (budget.category === action.payload.category) {
          budget.amount = action.payload.amount;
        };
      })}
  }
  });

export const { editBudget } = budgetSlice.actions;
export const selectBudgets = (state) => state.budgets;
export default budgetSlice.reducer;
