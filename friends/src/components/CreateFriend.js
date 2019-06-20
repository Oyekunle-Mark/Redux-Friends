import React, { createRef } from 'react';
import { connect } from 'react-redux';

import { createFriend } from '../redux/actionCreators';

const CreateFriend = ({ createFriend }) => {
  const name = createRef();
  const age = createRef();
  const email = createRef();

  const handleSubmit = e => {
    e.preventDefault();

    createFriend(name.current.value, age.current.value, email.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" ref={name} />
      <input type="number" placeholder="age" ref={age} />
      <input type="email" placeholder="location" ref={email} />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default connect(
  null,
  { createFriend },
)(CreateFriend);
