import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import * as actions from "./actions";
import { connect } from "react-redux";
import BuildWorkout from "./components/BuildWorkout";
import Login from "./components/Login";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AddNewExercise from "./components/AddNewExercise";
import DisplayWorkout from "./components/DisplayWorkout";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

library.add(faDumbbell);

class App extends Component {
  handleClick = e => {
    fetch("/exercises")
      .then(response => response.json())
      .then(myJson => console.log(myJson));
  };

  componentDidMount() {
    fetch("/exercises")
      .then(response => response.json())
      .then(myJson => {
        this.props.addExercise(myJson);
      });
  }

  handleClick = e => {
    this.props.endSession();
    this.props.clearWorkout();
  };

  render() {
    const loggedIn = () => {
      if (this.props.userId === "") {
        return (
          <Login
            registerUser={this.props.registerUser}
            createNewUser={this.props.createNewUser}
          />
        );
      }
    };

    return (
      <Router>
        <React.Fragment>
          <Navbar
            loggedIn={this.props.loggedIn}
            logOut={this.props.endSession}
          />

          <Switch>
            {loggedIn()}
            <Route
              exact
              path="/login"
              render={() => <Login registerUser={this.props.registerUser} />}
            />
            <Route
              exact
              path="/addnewexercise"
              render={() => (
                <AddNewExercise addNewExercise={this.props.addNewExercise} />
              )}
            />
            <Route exact path="/buildworkout" render={() => <BuildWorkout />} />
            )} />
            <Route
              exact
              path="/displayworkout"
              render={() => (
                <DisplayWorkout
                  workout={this.props.workout}
                  userId={this.props.userId}
                  saveWorkout={this.props.saveWorkout}
                  liftHistory={this.props.liftHistory}
                  saveLift={this.props.savedLifts}
                  getLiftHistory={this.props.getLiftHistory}
                />
              )}
            />
            <button onClick={e => this.handleClick(e)}>LogOut</button>
            <button onClick={e => this.handleTest(e)}>Test</button>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.session.userId,
    workout: state.workout,
    liftHistory: state.liftHistory,
    loggedIn: state.session.loggedIn
    // exercises: state.exercises
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
