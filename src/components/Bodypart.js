import React, { Component } from "react";
import index from "../index.css";
import { withRouter } from "react-router-dom";

class Bodypart extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    let checkedValue = [];
    let inputElements = document.getElementsByClassName("exerciseCheckbox");
    let sets = document.getElementsByClassName("sets");
    let objs = [];
    let exercise;
    for (let i = 0; i < inputElements.length; i++) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value);
      }
    }
    for (let i = 0; i < checkedValue.length; i++) {
      exercise = this.props.all.filter(
        lift => lift.id === parseInt(checkedValue[i])
      );
      objs.push(exercise);
    }
    objs = objs.reduce((a, b) => a.concat(b));
    this.props.buildWorkout(objs);

    this.props.history.push("/displayworkout");
  };

  render() {
    return (
      <div className="mb-5">
        <form>
          <div className="card-group">
            <div className="col-sm-4">
              <div className="cards">
                <h2 style={{ display: "flex" }}>Chest</h2>
                {this.props.chest.map(exercise => (
                  <div className="card" key={exercise.id}>
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          className="exerciseCheckbox"
                          value={exercise.id}
                        />
                        {exercise.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-4">
              <h2>Shoulders</h2>
              {this.props.shoulders.map(exercise => (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="exerciseCheckbox"
                      value={exercise.id}
                    />
                    {exercise.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="col-sm-4">
              <h2>Biceps</h2>
              {this.props.biceps.map(exercise => (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="exerciseCheckbox"
                      value={exercise.id}
                    />
                    {exercise.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="card-group">
            <div className="col-sm-4">
              <h2 className="card-title">Ticeps</h2>
              {this.props.triceps.map(exercise => (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="exerciseCheckbox"
                      value={exercise.id}
                    />
                    {exercise.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="col-sm-4">
              <h2>Back</h2>
              {this.props.back.map(exercise => (
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      className="exerciseCheckbox"
                      value={exercise.id}
                    />
                    {exercise.name}
                  </label>
                </div>
              ))}
            </div>
            <div className="col-sm-4 mb-5">
              <div className="cards">
                <h2>Legs</h2>
                {this.props.legs.map(exercise => (
                  <div className="card">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          className="exerciseCheckbox"
                          value={exercise.id}
                        />
                        {exercise.name}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="partSubmit">
            <input
              type="submit"
              onClick={this.handleSubmit}
              className="btn btn-primary"
              value="Build Your Workout!"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Bodypart);
