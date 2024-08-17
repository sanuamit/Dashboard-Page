// src/components/Widget.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ widgetId: widget.id, categoryId }));
  };

  return (
    <div className="p-4 bg-white dark:bg-cardBackground shadow rounded-lg relative transition-colors duration-300">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
      >
        &times;
      </button>
      <h3 className="text-lg font-semibold">{widget.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{widget.text}</p>
    </div>
  );
};

export default Widget;
