import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Hello and welcome</h1>
      <div className="home-content">
        <div className="left-content">
          <h3>
            This is my project! how to get started <br /> follow the
            Instructions on the right
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
