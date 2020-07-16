import React, { Component } from "react";

export default class KeypadEntry extends Component {
  btnPressed = (e) => {
    this.props.btnPressed(e.target.name);
  };
  render() {
    return (
      <div className="btnCss">
        <button name="(" onClick={this.btnPressed} className="special-btns">
          (
        </button>
        <button name="CE" onClick={this.btnPressed} className="special-btns">
          CE{" "}
        </button>
        <button name="C" onClick={this.btnPressed} className="special-btns">
          C
        </button>
        <button name=")" onClick={this.btnPressed} className="special-btns">
          )
        </button>

        <button name="1" onClick={this.btnPressed}>
          1
        </button>
        <button name="2" onClick={this.btnPressed} onClick={this.btnPressed}>
          2
        </button>
        <button name="3" onClick={this.btnPressed}>
          3
        </button>
        <button name="+" onClick={this.btnPressed} className="special-btns">
          +
        </button>
        <button name="4" onClick={this.btnPressed}>
          4
        </button>
        <button name="5" onClick={this.btnPressed}>
          5
        </button>
        <button name="6" onClick={this.btnPressed}>
          6
        </button>
        <button name="-" onClick={this.btnPressed} className="special-btns">
          -
        </button>
        <button name="7" onClick={this.btnPressed}>
          7
        </button>
        <button name="8" onClick={this.btnPressed}>
          8
        </button>
        <button name="9" onClick={this.btnPressed}>
          9
        </button>
        <button name="*" onClick={this.btnPressed} className="special-btns">
          *
        </button>
        <button name="." onClick={this.btnPressed} >
          .
        </button>
        <button name="0" onClick={this.btnPressed}>
          0
        </button>
        <button name="=" onClick={this.btnPressed} className="ans-btn">
          =
        </button>
        <button name="/" onClick={this.btnPressed} className="special-btns">
          /
        </button>
      </div>
    );
  }
}
