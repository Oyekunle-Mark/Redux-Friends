import axios from 'axios';
import axiosImproved from '../axiosImproved';

import actionTypes from './actionTypes';

export const createFriend = (name, age, email) => dispatch => {
  const newFriend = {
    name,
    age,
    email,
  };

  axiosImproved()
    .post('http://localhost:5000/api/friends', newFriend)
    .then(res =>
      dispatch({
        type: actionTypes.CREATE_FRIEND,
        payload: res.data,
      }),
    )
    .catch(err => console.log(err.message));
};

export const getFriends = () => dispatch => {
  axiosImproved()
    .get('http://localhost:5000/api/friends')
    .then(res =>
      dispatch({
        type: actionTypes.GET_FRIENDS,
        payload: res.data,
      }),
    )
    .catch(err => console.log(err.message));
};

export const login = (username, password) => dispatch => {
  axios
    .post('http://localhost:5000/api/login', { username, password })
    .then(res =>
      dispatch({
        type: actionTypes.LOGGING_IN,
        payload: res.data.payload,
      }),
    )
    .catch(err => console.log(err.message));
};
