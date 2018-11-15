import React, { Component } from "react";
import History from "./History";

export default class LiftHistory extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      text: "See Lift History"
    };
  }

  handleClick = () => {
    if (this.state.text === "See Lift History") {
      this.setState(prevState => ({
        show: !prevState.show,
        text: "Hide Lift History"
      }));
    } else {
      this.setState(prevState => ({
        show: !prevState.show,
        text: "See Lift History"
      }));
    }
  };

  showHistory = () => {
    if (this.state.show === true) {
      let filtered = this.props.liftHistory.filter(
        lift => lift.exercise_id === this.props.lift
      );
      return <History liftHistory={filtered} />;
    }
  };

  render() {
    return (
      <div>
        {this.showHistory()}
        <button onClick={this.handleClick}>{this.state.text}</button>
      </div>
    );
  }
}
