import actionTypes from '../actionTypes';

const appStateReducer = (state = false, action) => {
  switch(action.type) {
    case actionTypes.LOGGING_IN:
      return true;
    default:
      return state;
  }
}

export default appStateReducer;
