import React, { Component } from "react";
import { BodyPart } from "../components/Bodypart";
import { connect } from "react-redux";
import Bodypart from "../components/Bodypart";
import * as actions from "../actions";

class Bodyparts extends Component {
  render() {
    const {
      chest,
      shoulders,
      biceps,
      triceps,
      back,
      legs,
      all,
      buildWorkout
    } = this.props;
    return (
      <div className="container">
        <Bodypart
          chest={chest}
          shoulders={shoulders}
          biceps={biceps}
          triceps={triceps}
          back={back}
          legs={legs}
          all={all}
          buildWorkout={buildWorkout}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chest: state.exercises.filter(exercise => exercise.bodypart === "chest"),
    shoulders: state.exercises.filter(
      exercise => exercise.bodypart === "shoulders"
    ),
    biceps: state.exercises.filter(exercise => exercise.bodypart === "biceps"),
    triceps: state.exercises.filter(
      exercise => exercise.bodypart === "triceps"
    ),
    back: state.exercises.filter(exercise => exercise.bodypart === "back"),
    legs: state.exercises.filter(exercise => exercise.bodypart === "legs"),
    all: state.exercises
  };
};

export default connect(
  mapStateToProps,
  actions
)(Bodyparts);
