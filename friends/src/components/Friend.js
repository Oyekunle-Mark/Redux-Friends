import React from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteFriend } from '../redux/actionCreators';

const StyledFriend = styled.div`
  min-width: 500px;
  background: rgb(14, 13, 13);
  color: rgb(255, 21, 21);
  margin: 20px 0;
  padding: 15px;
  font-family: 'Courgette', cursive;

  h4 {
    font-size: 25px;
  }

  h4 span {
    font-size: 17px;
  }

  div {
    margin-top: 10px;
  }

  div button {
    margin-top: 10px;
    height: 25px;
    background: white;
    color: rgb(14, 13, 13);
    border: 1px solid white;
    font-size: 12px;
    font-weight: bold;
  }

  div button:hover {
    cursor: pointer;
  }
`;

const Friend = ({ friend, deleteFriend }) => (
  <StyledFriend>
    <h4>
      {friend.name}, <span>{friend.age}</span>
    </h4>
    <div>
      <p>{friend.email}</p>
      <button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
    </div>
  </StyledFriend>
);

Friend.propTypes = {
  friend: object.isRequired,
  deleteFriend: func.isRequired,
}

export default connect(
  null,
  { deleteFriend },
)(Friend);
