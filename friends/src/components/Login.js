import React, { createRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { login } from '../redux/actionCreators';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: 50px;

  input {
    border: 1px solid rgb(14, 13, 13);
    width: 300px;
    height: 23px;
    padding: 2px;
    margin: 10px 0;
  }

  button {
    margin-top: 10px;
    height: 26px;
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

const Form = ({ login, history }) => {
  const inputValue = createRef();
  const passwordValue = createRef();

  const handleSubmit = e => {
    e.preventDefault();

    login(inputValue.current.value, passwordValue.current.value);
    setTimeout(() => history.push('/'), 1000);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="text" placeholder="username" ref={inputValue} />
      <input type="password" placeholder="password" ref={passwordValue} />
      <button type="submit">Login</button>
    </StyledForm>
  );
};

export default connect(
  null,
  { login },
)(Form);
