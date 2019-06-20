import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Friend from './Friend';
import { getFriends } from '../redux/actionCreators';

const Friends = ({ friends, getFriends }) => {
  useEffect(getFriends, []);

  const friendList = friends.map(fr => <Friend key={fr.id} friend={fr} />);

  return <div>{friendList}</div>;
};

const mapStateToProps = state => ({
  friends: state.friends,
});

export default connect(
  mapStateToProps,
  { getFriends },
)(Friends);
