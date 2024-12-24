// Alert.js
import React from "react";
import "./Alert.css";

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <span className="close-btn" onClick={onClose}>×</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;