import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Modal from "../components/Modal";
import { Logout } from "../helpers/index.js";

export default function Navbar(handleSubmit) {
  const navRef = useRef();
  const [auth, setAuth] = useState(localStorage.getItem("user") !== null);

  const showNavbar = () => {
    navRef.current.classList.toggle("resp-nav");
  };

  function handlelogOut() {
    Logout();
    setAuth(false);
  }

  return (
    <header>
      <h2>Noxar</h2>
      <nav ref={navRef}>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          {auth && (
            <li>
              <Link to="/user">Game</Link>
            </li>
          )}
          {!auth && (
            <li>
              <Modal />
            </li>
          )}
          {auth && (
            <div title={UserName} className="dropdown">
              <button className="dropbtn">User</button>
              <div className="dropdown-content">
                <a>Account</a>
                <a onClick={handlelogOut}>Logout</a>
              </div>
            </div>
          )}
        </ul>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
