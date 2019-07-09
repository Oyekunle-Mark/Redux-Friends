import React, { createRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createFriend } from '../redux/actionCreators';

const StyledForm = styled.form`
  margin: 20px;

  input {
    border: 1px solid rgb(14, 13, 13);
    height: 18px;
    padding: 2px;
    margin: 0 5px;
  }

  button {
    margin-top: 10px;
    height: 24px;
    background: rgb(255, 21, 21);
    color: white;
    border: 1px solid rgb(14, 13, 13);
    font-size: 12px;
    font-weight: bold;
  }

  button:hover {
    cursor: pointer;
  }
`;

const CreateFriend = ({ createFriend }) => {
  const name = createRef();
  const age = createRef();
  const email = createRef();

  const handleSubmit = e => {
    e.preventDefault();

    createFriend(name.current.value, age.current.value, email.current.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="text" placeholder="name" ref={name} />
      <input type="number" placeholder="age" ref={age} />
      <input type="email" placeholder="email" ref={email} />
      <button type="submit">Add Friend</button>
    </StyledForm>
  );
};

export default connect(
  null,
  { createFriend },
)(CreateFriend);
