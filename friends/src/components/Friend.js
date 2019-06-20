import React from 'react';
import { connect } from 'react-redux';

import { deleteFriend } from '../redux/actionCreators';

const Friend = ({ friend, deleteFriend }) => (
  <div>
    <h4>
      {friend.name}, <span>{friend.age}</span>
    </h4>
    <div>
      <p>{friend.email}</p>
      <button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
    </div>
  </div>
);

export default connect(
  null,
  { deleteFriend },
)(Friend);
