import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Friend from './Friend';
import { getFriends } from '../redux/actionCreators';

const StyledFriends = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Friends = ({ friends, getFriends }) => {
  useEffect(getFriends, []);

  const friendList = friends.map(fr => <Friend key={fr.id} friend={fr} />);

  return <StyledFriends>{friendList}</StyledFriends>;
};

const mapStateToProps = state => ({
  friends: state.friends,
});

export default connect(
  mapStateToProps,
  { getFriends },
)(Friends);
