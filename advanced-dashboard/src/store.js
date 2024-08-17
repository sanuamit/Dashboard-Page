// src/store.js
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { widgetId, categoryId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

export const {
  setCategories,
  addWidget,
  removeWidget,
  addCategory,
  removeCategory,
} = dashboardSlice.actions;

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
  },
});
