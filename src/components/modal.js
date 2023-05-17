import React, { useState } from "react"; //useState
import Register from "../components/Register";
import { FaTimes } from "react-icons/fa";

import "../styles/modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Register
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              <FaTimes />
            </button>
            <Register />
          </div>
        </div>
      )}
    </>
  );
}
