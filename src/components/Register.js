import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // fetch("/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   },
    //   body: JSON.stringify(this.state)
    // })
    //   .then(response => response.json())
    //   .then(myJson => console.log(myJson));
    this.props.createNewUser(this.state);
    this.setState({});
    this.props.history.push("/buildworkout");
  };

  render() {
    return (
      <div>
        <h2>Signup for Free!</h2>
        <form action="" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="">Email: </label>
          <input type="text" onChange={this.handleChange} name="email" />
          <br />
          <label htmlFor="">Password: </label>
          <input type="password" onChange={this.handleChange} name="password" />
          <br />
          <label htmlFor="">Confirm Password: </label>
          <input
            type="password"
            onChange={this.handleChange}
            name="passwordConfirm"
          />
          <br />
          <input type="submit" />
          <br />
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
