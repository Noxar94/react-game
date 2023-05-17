import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("resp-nav");
  };
  return (
    <header>
      <h2>Noxar</h2>
      <nav ref={navRef}>
        <Link to="/"> Home</Link>
        <Link to="/game">Game</Link>
        <button className="Login-btn">Login</button>

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
