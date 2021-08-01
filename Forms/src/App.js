import "./App.css";
import React, { Component } from "react";
import Form from "./Form/Form";
import View from "./View/View";
import Popup from "./Popup/Popup";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "Student",
      message: "",
    },
    showPopup: false,
    notes: [],
  };

  updateViewHandler = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  showPopupHandler = (event) => {
    this.setState({
      showPopup: true,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Form update={this.updateViewHandler} submit={this.showPopupHandler} />

        {this.state.showPopup && (
          <Popup {...this.state.inputData} submit={this.postDataHandler} />
        )}

        <View {...this.state.inputData} />
      </div>
    );
  }
}

export default App;
