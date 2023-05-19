import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { FaTimes } from "react-icons/fa";

import "../styles/modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Login");

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleComponent = () => {
    setActiveComponent(activeComponent === "Login" ? "Register" : "Login");
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Register/Login
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              <FaTimes />
            </button>

            {activeComponent === "Login" ? <Login /> : <Register />}
            <button className="switch-btn" onClick={toggleComponent}>
              Switch to {activeComponent === "Login" ? "Register" : "Login"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
