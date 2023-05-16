import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function navbar() {
  const navRef = useRef();
  const showNavbar = () => {};
  return (
    <header>
      <nav ref={navRef}>
        <h2>My Logo</h2>
        <Link to="/"></Link>
        <Link to="/game"></Link>

        <button onClick={showNavbar}></button>
      </nav>
      <button onClick={showNavbar}></button>
    </header>
  );
}
