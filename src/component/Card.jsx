import React from 'react';

function Child({ onNameChange }) {
  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
  );
}

export default Child;
