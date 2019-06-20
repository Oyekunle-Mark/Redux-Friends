import actionTypes from '../actionTypes';

const friendsReducer = (state = [], action) => {
  switch(action.type) {
    case actionTypes.CREATE_FRIEND:
      return action.payload;
    case actionTypes.GET_FRIENDS:
      return action.payload;
    case actionTypes.DELETE_FRIEND:
      return action.payload;
    default:
      return state;
  }
};

export default friendsReducer;
