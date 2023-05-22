import React from "react";
import GameLogic from "../components/GameLogic";
import "../styles/Game.css";

export default function Game() {
  return (
    <div className="game-background">
      <GameLogic />
    </div>
  );
}
