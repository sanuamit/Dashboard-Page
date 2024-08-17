// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./components/Category";
import { setCategories } from "./store";
import db from "./db.json"; // Import your JSON data

function App() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);

  useEffect(() => {
    dispatch(setCategories(db.categories));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12">
          Advanced Dashboard
        </h1>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default App;
