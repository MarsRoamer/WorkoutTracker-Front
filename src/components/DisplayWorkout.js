import ReactDOM from "react-dom";
import React, { Component } from "react";
import Lift from "./Lift";
import { withRouter } from "react-router-dom";

class DisplayWorkout extends Component {
  constructor() {
    super();
    this.state = {};
    this.myRef = React.createRef;
  }

  hasBuiltWorkout = () => {
    if (this.props.workout.length === 0) {
      this.props.history.push("/buildworkout");
    }
  };

  reviewWorkout = () => {
    debugger;
  };

  updateState = id => {
    debugger;
    this.setState({ [id]: "false" });
  };

  componentDidMount = () => {
    let test = ReactDOM.findDOMNode(this);
    this.setState({
      node: test
    });
  };

  render() {
    return (
      <div>
        {this.hasBuiltWorkout()}
        <h1>Display workout here!</h1>
        {this.props.workout.map(lift => {
          // if (this.state.test === "false") {
          //   return null;
          // } else
          return (
            <Lift
              key={lift.id}
              lift={lift}
              userId={this.props.userId}
              saveWorkout={this.props.saveWorkout}
              liftHistory={this.props.liftHistory}
              getLiftHistory={this.props.getLiftHistory}
              unMount={this.updateState}
              test={this.myRef.current}
            />
          );
        })}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={this.reviewWorkout}>Review today's workout</button>
        </div>
      </div>
    );
  }
}

export default withRouter(DisplayWorkout);
