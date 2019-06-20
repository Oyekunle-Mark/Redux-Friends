import actionTypes from '../actionTypes';

const addTokenToLocalStorage = store => next => action => {
  if (action.type === actionTypes.LOGGING_IN)
    localStorage.setItem('friendAppToken', action.payload);

  next(action);
};

export default addTokenToLocalStorage;
