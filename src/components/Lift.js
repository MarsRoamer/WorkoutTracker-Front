import ReactDOM from "react-dom";
import React, { Component } from "react";
import LiftHistory from "./LiftHistory";

export default class Lift extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleTest = this.handleTest.bind(this);
    // this.myRef = React.createRef;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let user = { userId: this.props.userId };
    let exercise = { exerciseId: this.props.lift.id };
    let data = dataCleanse(this.state);
    let fullData = [user, exercise, ...data];
    this.props.saveWorkout(fullData);
    this.props.unMount(this.props.lift.id);
    this.setState({});
  };

  componentDidMount = () => {
    this.props.getLiftHistory(this.props.userId, this.props.lift.id);
  };

  handleTest = () => {
    // let test = ReactDOM.findDOMNode(this);
    // debugger;
    ReactDOM.unmountComponentAtNode(this.props.ref);
    // let node = React.createRef.current;
    // const node = this.myRef.current;  // const node = this.myRef.current;
    // debugger;
  };

  render() {
    return (
      <div className="">
        <h3>{this.props.lift.name}</h3>
        <form action="">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Set</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Reps</th>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps0"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps1"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps2"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps3"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps4"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps5"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps6"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps7"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps8"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Reps9"
                    className="userInput"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Weight</th>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight0"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight1"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight2"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight3"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight4"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight5"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight6"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight7"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight8"
                    className="userInput"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="Weight9"
                    className="userInput"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" onClick={this.handleSubmit} />
        </form>
        <button onClick={this.handleTest}>Test Button</button>
        <LiftHistory
          liftHistory={this.props.liftHistory}
          lift={this.props.lift.id}
        />
      </div>
    );
  }
}

const dataCleanse = dataset => {
  let arr = [];
  let arr1 = [];
  let arrW = [];
  let arrR = [];
  let cleansed = [];
  let test;

  for (const key in dataset) {
    console.log(`${key}:${dataset[key]}`);
    if (key[0] === "R") {
      let obj = {};
      obj[`${key}`] = parseInt(dataset[key]);
      arr.push(obj);
    } else if (key[0] === "W") {
      let obj = {};
      obj[`${key}`] = parseInt(dataset[key]);
      arr1.push(obj);
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    arrW.push(undefined);
    arrR.push(undefined);
  }

  arr.forEach(element => {
    test = Object.keys(element)[0][4];
    arrR.splice(test, 1, element);
  });

  arr1.forEach(element => {
    test = Object.keys(element)[0][6];
    arrW.splice(test, 1, element);
  });

  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    obj[Object.values(arrR[i])] = Object.values(arrW[i])[0];
    cleansed.push(obj);
  }

  return cleansed;
};
