import actionTypes from '../actionTypes';

const addTokenToLocalStorage = store => next => action => {
  if (action.type === actionTypes.LOGGED_IN)
    localStorage.setItem('friendAppToken', action.payload);

  next(action);
};

export default addTokenToLocalStorage;
