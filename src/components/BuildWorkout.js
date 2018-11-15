import React, { Component } from "react";
import BodyParts from "../containers/Bodyparts";
import { withRouter } from "react-router-dom";

class BuildWorkout extends Component {
  addNew = e => {
    this.props.history.push("/addnewexercise");
  };

  render() {
    return (
      <div>
        <h1
          style={{ textAlign: "center" }}
          className="container mb-3 mt-3"
          id="test"
        >
          Build Your Workout!
        </h1>
        <BodyParts />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4>
            Don't see the exercise you want? Click{" "}
            <button
              sytle={{ display: "flex", justifyContent: "center" }}
              className="btn btn-primary"
              onClick={e => this.addNew(e)}
            >
              Here!
            </button>{" "}
            to add it!
          </h4>
          {/* <button
            sytle={{ display: "flex", justifyContent: "center" }}
            className="btn btn-primary"
            onClick={e => this.addNew(e)}
          >
            Here!
          </button> */}
        </div>
      </div>
    );
  }
}

export default withRouter(BuildWorkout);
