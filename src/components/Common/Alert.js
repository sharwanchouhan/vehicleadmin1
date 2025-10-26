import React from 'react';

const Alert = ({ type, message, onClose }) => {
  return (
    <div className={`alert alert-${type}`}>
      {message}
      {onClose && <button onClick={onClose}>&times;</button>}
    </div>
  );
};

export default Alert;