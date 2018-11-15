import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class AddNewExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      bodypart: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, description, bodypart } = this.state;
    if (name === "" || description === "" || bodypart === "") {
      alert("Please fill out all 3 fields");
    } else {
      this.props.addNewExercise(this.state);
      this.setState({
        name: "",
        description: "",
        bodypart: ""
      });
    }
    this.props.history.push("/buildworkout");
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        className="pt-5"
      >
        <form action="">
          <div className="form-group">
            <label htmlFor="">Exercise Name: </label>
            <input
              type="text"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              className="form-control"
            />
            <br />
            <label htmlFor="">Description of Exercise: </label>
            <input
              type="text"
              onChange={this.handleChange}
              name="description"
              value={this.state.description}
              className="form-control"
            />
            <br />
            {/* <label htmlFor="">Primary target of exercise: </label> */}
            {/* <input type="text" onChange={this.handleChange} name="bodypart" /> */}
            <select
              className="form-control"
              id="sel1"
              onChange={this.handleChange}
              name="bodypart"
              //   value="Please Select a primary bodypart"
            >
              <option>Please Select a primary bodypart</option>
              <option>chest</option>
              <option>shoulders</option>
              <option>biceps</option>
              <option>triceps</option>
              <option>legs</option>
              <option>back</option>
              <option>full body</option>
              <option>misc</option>
            </select>
            <br />

            <input
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            />
            {/* <button onClick={e => this.handleSubmit(e)}>Submit</button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddNewExercise);
