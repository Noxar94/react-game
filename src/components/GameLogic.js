import React, { useState } from "react";
import "../styles/GameLogic.css";
import BackgroundVideo from "../videos/Numbers.mp4";

const GameLogic = () => {
  const [guess, setGuess] = useState("");
  const [response, setResponse] = useState("");
  const [tries, setTries] = useState(0);
  const [randomNumber, setRandomNumber] = useState(makeRandomNumber(null));
  const [difficulty, setDifficulty] = useState("None");

  function handleGuess(event) {
    setGuess(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userGuess = parseInt(guess);

    if (userGuess) {
      setTries(tries + 1);
    }

    if (userGuess === randomNumber) {
      setResponse(`Winner! You guessed the number in ${tries + 1} tries.`);
      setRandomNumber(null);
    } else if (userGuess < randomNumber) {
      setResponse("Try a higher number");
    } else {
      setResponse("Try a lower number");
    }
    setGuess("");
  }

  function handleDifficulty(event) {
    const difficultyLevel = event.target.value;

    if (difficultyLevel === "Easy") {
      setRandomNumber(makeRandomNumber(1, 10));
    } else if (difficultyLevel === "Medium") {
      setRandomNumber(makeRandomNumber(1, 50));
    } else if (difficultyLevel === "Hard") {
      setRandomNumber(makeRandomNumber(1, 100));
    } else if (difficultyLevel === "None") {
      setRandomNumber(null);
    }
    setDifficulty(difficultyLevel);
  }

  function makeRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="center-container">
      <div className="game-container">
        <video className="BackgroundVideo" autoPlay loop muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div className="gameform-container">
          <h1>
            Guess the number in as few tries as possible.
            <br />
            <br />
            <p>Difficulty: {difficulty}</p>
            <select onChange={handleDifficulty}>
              <option value="None">Set difficulty</option>
              <option value="Easy"> Between 1-10</option>
              <option value="Medium">Between 1-50</option>
              <option value="Hard">Between 1-100</option>
            </select>
          </h1>

          <form onSubmit={handleSubmit} className="gameform">
            <p className="response-text">{response}</p>
            <input
              placeholder="Guess your number here"
              type="number"
              value={guess}
              onChange={handleGuess}
            />
            <button id="game-btn" type="submit">
              Guess it
            </button>
            <p className="tries-text">tries:{tries}</p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default GameLogic;
