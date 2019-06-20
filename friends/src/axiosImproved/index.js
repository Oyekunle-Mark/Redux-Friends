import axios from 'axios';

export default () => {
  const token = localStorage.getItem('friendAppToken')
    ? localStorage.getItem('friendAppToken')
    : 'not signed in';

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  });
};
