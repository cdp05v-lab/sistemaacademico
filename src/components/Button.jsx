import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-3"
    >
      {text}
    </button>
  );
};

export default Button;