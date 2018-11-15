import React, { Component } from "react";
import Register from "./Register";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actions from "../actions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      register: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    let data = { email: this.state.email, password: this.state.password };

    fetch("/sessions", {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(myJson => {
        if (myJson.id) {
          this.props.registerUser(myJson.id);
        } else {
          return;
        }
      });
    this.setState({});
    this.props.history.push("/buildworkout");
  };

  register = () => {
    if (this.state.register === true) {
      return <Register createNewUser={this.props.createNewUser} />;
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#eaf2ff",
          width: "100%",
          height: "100vh"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          className="pt-5"
        >
          <form action="" className="pb-2 border-bottom">
            <div className="form-group">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            {/* <label htmlFor="">Password: </label>
            <input
              type="password"
              name="password"
              id="pass"
              onChange={this.handleChange}
            /> */}
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary"
              onClick={this.handleClick}
            />
          </form>
        </div>
        <div>
          {this.register()}
          <button
            onClick={() => this.setState({ register: !this.state.register })}
          >
            Create Account
          </button>
        </div>
      </div>
      // </div>
    );
  }
}

// export default connect(
//   null,
//   actions
// )(Login);

export default withRouter(Login);
