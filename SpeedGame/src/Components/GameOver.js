import React from "react";
import "./GameOver.css";

const closeHandler = () => {
  window.location.reload();
};

const endGame = (score) => {
  if (score < 10) {
    return "Try again!";
  } else if (score < 20) {
    return "You're getting better!";
  } else if (score < 30) {
    return "You're pretty good!";
  } else if (score < 40) {
    return "Amazing!";
  } else {
    return "Wow.";
  }
};

const GameOver = (props) => {
  return (
    <div className="gameover">
      <div className="popup">
        <h3>Game Over</h3>
        <p>Score: {props.score}</p>
        <p>{endGame(props.score)}</p>
        <button onClick={closeHandler}>Close</button>
      </div>
    </div>
  );
};

export default GameOver;
