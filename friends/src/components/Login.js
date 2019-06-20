import React, { createRef } from 'react';
import { connect } from 'react-redux';

import { login } from '../redux/actionCreators';

const Form = ({ login, history }) => {
  const inputValue = createRef();
  const passwordValue = createRef();

  const handleSubmit = e => {
    e.preventDefault();

    login(inputValue.current.value, passwordValue.current.value);
    setTimeout(() => history.push("/"), 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputValue} />
      <input type="text" ref={passwordValue} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect(
  null,
  { login },
)(Form);
