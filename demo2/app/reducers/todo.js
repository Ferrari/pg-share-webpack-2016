import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/todo.js';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
        return action.filter;
      break;
    default:
      return state;
  }
}

function todo(state, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
      break;
    case COMPLETE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: true
      }
      break;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ]
      break;
    case COMPLETE_TODO:
      return state.map(t =>
        todo(t, action)
      )
      break;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
