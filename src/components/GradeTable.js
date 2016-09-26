import React, { Component } from 'react';

import GradeActions from '../actions/GradeActions';

export default class GradeTable extends Component {
  constructor(props) {
    super(props);

  }

  _deleteGrade (id) {
    console.log('should be deleting: ', id);
    GradeActions.deleteGrade(id);
  }

  render() {
    const { grades } = this.props;

    return (
      <div className='row'>
        <table className="table">
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Grade</th>
              <th>Score</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {grades.map(grade => {
              let { id, assignment, score, total, letter } = grade;
              return (
                <tr key={id}>
                  <td>{assignment}</td>
                  <td>{letter}</td>
                  <td>{score} / {total}</td>
                  <td>
                    <button className="btn btn-danger" onClick={this._deleteGrade.bind(this, id)}>X</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
