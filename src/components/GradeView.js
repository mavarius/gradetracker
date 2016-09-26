import React, { Component } from 'react';

import GradeTable from './GradeTable';
import GradeSummary from './GradeSummary';
import GradeStore from '../stores/GradeStore';

export default class GradeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grades: GradeStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    GradeStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    GradeStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      grades: GradeStore.getAll()
    })
  }

  render() {
    const { grades } = this.state;

    return (
      <div>
        <GradeSummary grades={grades} />
        <GradeTable grades={grades} />
      </div>
    )
  }
}
