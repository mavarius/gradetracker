import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import Storage from '../Storage';

let _grades = Storage.readWrite('grades') || [];

let _overall = Storage.readWrite('overall') || {letter: '-', score: 0, total: 0};

class GradeStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'ADD_GRADE':
          let { grade } = action.payload;
          _grades.push(grade);
          _overall = this._getGrades();
          this.emit('CHANGE');
          break;
        case 'DELETE_GRADE':
          let { id } = action.payload;
          _grades = _grades.filter(grade => grade.id !== id);
          _overall = this._getGrades();
          this.emit('CHANGE');
          break;
      }
    });

    this.on('CHANGE', () => {
      Storage.readWrite('grades', _grades);
      Storage.readWrite('overall', _overall);
    });
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

  _getGrades() {
    let total = _grades.reduce((acc, item, i) => (acc + item.total), 0);
    let score = _grades.reduce((acc, item, i) => (acc + item.score), 0);
    let percentage = (score/total) * 100;
    let letter = this._gradeIt(percentage);

    return {
      letter,
      score,
      total
    }
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return {
      grades: _grades,
      overall: _overall
    };
  }
}

export default new GradeStore();
