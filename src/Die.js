import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWord: ["one", "two", "three", "four", "five", "six"],
    val: 1
  };
  constructor(props) {
    super(props);
    this.handleDieClick = this.handleDieClick.bind(this);
  }

  handleDieClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numberWord, locked, val, disabled, isRolling } = this.props;
    let dice = `Die fas fa-dice-${numberWord[val - 1]} fa-5x `;

    if (locked) dice += "Die-locked";
    if (isRolling) dice += "Die-rolling";

    return (
      <i className={dice} onClick={this.handleDieClick} disabled={disabled} />
    );
  }
}

export default Die;
