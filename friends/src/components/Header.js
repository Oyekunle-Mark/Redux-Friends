import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 15px 20px;
  background: rgb(5, 5, 5);

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-family: 'Kaushan Script', cursive;
    font-size: 35px;
    margin-left: 15px;
    color: rgb(245, 30, 30);
  }
`;

const Header = () => (
  <StyledHeader>
    <img
      src="https://image.flaticon.com/icons/svg/1049/1049867.svg"
      alt="friends"
    />
    <h1>Friend Zone</h1>
  </StyledHeader>
);

export default Header;
