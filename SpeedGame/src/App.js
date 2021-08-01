import React, { Component } from "react";
import Circle from "./Components/Circle";
import "./App.css";
import GameOver from "./Components/GameOver";
import bgmusic from "./assets/sounds/start.mp3";
import endsound from "./assets/sounds/over.mp3";

let startSound = new Audio(bgmusic);
let endSound = new Audio(endsound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    circles: [
      { id: 1, color: "red" },
      { id: 2, color: "orange" },
      { id: 3, color: "yellow" },
      { id: 4, color: "green" },
    ],
    score: 0,
    current: 0,
    rounds: 0,
    showGameOver: false,
    gameStart: false,
    clickedOnce: false,
  };

  timer = undefined;
  speed = 2000;

  clickHandler = (id) => {
    if (this.state.current !== id) {
      this.endHandler();
      return;
    }

    if (this.state.clickedOnce === false) {
      this.setState({
        score: this.state.score + 1,
        rounds: 0,
        clickedOnce: true,
      });
    } else {
      return;
    }
  };

  nextTarget = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (this.state.current === nextActive);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
      clickedOnce: false,
    });

    this.speed *= 0.95;
    this.timer = setTimeout(this.nextTarget, this.speed);
  };

  startHandler = () => {
    this.nextTarget();
    this.setState({
      gameStart: true,
    });
    startSound.play();
  };

  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
    startSound.pause();
    endSound.play();
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.id}
          color={c.color}
          click={() => this.clickHandler(c.id)}
          active={this.state.current === c.id}
          disabled={this.state.gameStart}
        />
      );
    });

    return (
      <div>
        <h1>Speedgame</h1>
        <p>Score: {this.state.score}</p>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler} disabled={this.state.gameStart}>
          Start
        </button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
