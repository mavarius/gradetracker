import AppDispatcher from '../AppDispatcher';

const GradeActions = {
  addGrade(grade) {
    AppDispatcher.dispatch({
      type: 'ADD_GRADE',
      payload: { grade }
    })
  },
  
  deleteGrade(id) {
    AppDispatcher.dispatch({
      type: 'DELETE_GRADE',
      payload: { id }
    })
  }
}

export default GradeActions;
