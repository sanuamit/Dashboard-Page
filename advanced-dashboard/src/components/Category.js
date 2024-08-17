// src/components/Category.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWidget } from "../store";
import Widget from "./Widget";

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      text: widgetText,
    };

    dispatch(addWidget({ categoryId: category.id, widget: newWidget }));
    setWidgetName("");
    setWidgetText("");
  };

  return (
    <div className="bg-white dark:bg-cardBackground shadow-lg rounded-xl p-6 mb-6 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-4">{category.name}</h2>

      <div className="space-y-4 mb-6">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="p-2 border rounded-md w-full text-black"
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          className="p-2 border rounded-md w-full text-black"
        />
        <button
          onClick={handleAddWidget}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Widget
        </button>
      </div>
    </div>
  );
};

export default Category;
