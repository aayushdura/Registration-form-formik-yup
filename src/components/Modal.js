import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import { Button } from "react-bootstrap";

const Modal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="container">
      <div className="Modal">
        <Button onClick={onClose}>X</Button>
        <h2>Hey this is from modal</h2>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
