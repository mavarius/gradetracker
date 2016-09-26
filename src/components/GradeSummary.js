import React, { Component } from 'react';

export default class GradeTable extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { grades } = this.props;

    return (
      <div className='row'>
        Summary Here
      </div>
    )
  }
}
