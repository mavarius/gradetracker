import React, { Component } from 'react';
import uuid from 'uuid';

import GradeActions from '../actions/GradeActions';

export default class GradeForm extends Component {
  constructor(props) {
    super(props);
    this._submitForm = this._submitForm.bind(this);
  }

  _gradeIt(percentage) {
    let letter = '';

    switch (true) {
      case (percentage >= 90):
        letter = 'A';
        break;
      case (percentage < 90 && percentage >= 80):
        letter = 'B';
        break;
      case (percentage < 80 && percentage >= 70):
        letter = 'C';
        break;
      case (percentage < 70 && percentage >= 60):
        letter = 'D';
        break;
      case (percentage < 60):
        letter = 'F';
        break;
    }

    return letter;
  }

  _submitForm(e) {
    e.preventDefault();
    const { NewAssignment, NewTotal, NewScore } = this.refs;

    let percentage = ((parseInt(NewScore.value))/(parseInt(NewTotal.value))) * 100;

    let newGrade = {
      id: uuid(),
      assignment: NewAssignment.value,
      total: parseInt(NewTotal.value),
      score: parseInt(NewScore.value),
      letter: this._gradeIt(percentage)
    }

    NewAssignment.value = '';
    NewTotal.value = '';
    NewScore.value = '';

    GradeActions.addGrade(newGrade);
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this._submitForm} className="form-inline">
          <div className="form-group">
            <label htmlFor="NewAssignment">Assignment:</label>
            <input ref="NewAssignment" type="text" className="form-control" id="NewAssignment" required/>
          </div>
          <div className="form-group">
            <label htmlFor="NewTotal">Points Available:</label>
            <input ref="NewTotal" type="number" className="form-control" id="NewScore" required min='0'/>
          </div>
          <div className="form-group">
            <label htmlFor="NewScore">Sore:</label>
            <input ref="NewScore" type="number" className="form-control" id="NewScore" required min='0'/>
          </div>
          <button className="btn btn-primary">Add Grade</button>
        </form>
      </div>
    )
  }
}
