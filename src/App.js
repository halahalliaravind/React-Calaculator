import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import KeypadEntry from "./components/KeypadEntry";
import Result from "./components/Result";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    result: "",
  };

  btnPressed = (btnName) => {
    if (btnName === "=") {
      this.calculate();
    } else if (btnName === "C") {
      this.reset();
    } else if (btnName === "CE") {
      this.backspace();
    } else
      this.setState({
        result: this.state.result + btnName,
      });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result),
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="calculator-body">
          <Result result={this.state.result} />
          <KeypadEntry btnPressed={this.btnPressed} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
