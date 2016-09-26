import React, { Component } from 'react';

export default class GradeTable extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { score, total, letter } = this.props.overall;

    return (
      <div className='row'>
        <h2 className="text-center">Average Grade: {letter}</h2>
        <h3 className="text-center">Total Score: {score}/{total}</h3>
      </div>
    )
  }
}
