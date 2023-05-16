import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <header>
      <nav>
        <Link to="/"></Link>
        <Link to="/game"></Link>
      </nav>
    </header>
  );
}
