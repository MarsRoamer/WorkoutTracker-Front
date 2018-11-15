import React, { Component } from "react";

export default class History extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Reps</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            {this.props.liftHistory.map(lift => {
              return [
                <tr>
                  <td>{lift.created_at.slice(0, 10)}</td>
                  <td>{lift.reps}</td>
                  <td>{lift.weight}</td>
                </tr>
              ];
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
