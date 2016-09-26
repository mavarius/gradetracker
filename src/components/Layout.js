import React, { Component } from 'react';
import GradeForm from './GradeForm';
import GradeView from './GradeView';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Timmy's Grades</h1>

        <GradeForm />
        <GradeView />

      </div>

    )
  }
}
