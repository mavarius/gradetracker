import React, { Component } from 'react';

import GradeTable from './GradeTable';
import GradeSummary from './GradeSummary';
import GradeStore from '../stores/GradeStore';

export default class GradeView extends Component {
  constructor(props) {
    super(props);

    this.state = GradeStore.getAll()

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    GradeStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    GradeStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState( GradeStore.getAll() )
  }

  render() {
    const { grades, overall } = this.state;

    return (
      <div>
        <GradeSummary overall={overall} />
        <GradeTable grades={grades} />
      </div>
    )
  }
}
