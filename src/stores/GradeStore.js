import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import Storage from '../Storage';

let _grades = Storage.readWrite('grades') || [];

class GradeStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'ADD_GRADE':
          let { grade } = action.payload;
          _grades.push(grade);
          console.log(_grades);
          this.emit('CHANGE');
          break;
        case 'DELETE_GRADE':
          let { id } = action.payload;
          _grades.filter(id => (_grades.id !== id));
          this.emit('CHANGE');
          break;
      }
    });

    this.on('CHANGE', () => {
      Storage.readWrite('grades', _grades);
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _grades;
  }
}

export default new GradeStore();
