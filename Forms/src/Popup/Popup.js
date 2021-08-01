import React from "react";
import "./Popup.css";

const resetHandler = () => {
  window.location.reload();
};

const Popup = ({ firstname, lastname, phone, role, message, submit }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <p>First name: {firstname}</p>
        <p>Last name: {lastname}</p>
        <p>Phone number: {phone}</p>
        <p>Role: {role}</p>
        <p>Message: {message}</p>
        <button onClick={resetHandler}>Back</button>
      </div>
    </div>
  );
};

export default Popup;
