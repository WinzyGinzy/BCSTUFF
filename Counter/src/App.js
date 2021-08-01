import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
  };

  increaseHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decreaseHandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };

  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    let circleClass;
    if (this.state.counter === 0) {
      circleClass = "circle";
    } else if (this.state.counter % 2 === 0) {
      circleClass = "even circle";
    } else {
      circleClass = "odd circle";
    }

    return (
      <div>
        <Header />
        <h1 className={circleClass}>{this.state.counter}</h1>
        <div className="buttons">
          <button onClick={this.increaseHandler}>+</button>
          <button onClick={this.decreaseHandler}>-</button>
          <button onClick={this.resetHandler}>0</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
