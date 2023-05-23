import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Hello and welcome</h1>
      <div className="home-content">
        <div className="left-content">
          <h3>
            <h2 style={{ color: "red" }}>Game not starting ?</h2> <br />{" "}
            <h3>Follow the green Instructions on the right</h3>
          </h3>
        </div>
        <div className="right-content">
          <ul>
            <li>Register an account!</li>
            <li>Log in!</li>
            <li>Go to game</li>
            <li>Play!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
