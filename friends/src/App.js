import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Friends from './components/Friends';
import CreateFriend from './components/CreateFriend';
import Login from './components/Login';
import PrivateRouter from './components/PrivateRoute';
import Header from './components/Header';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgb(235, 235, 235);
  min-height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <Header />
        <PrivateRouter exact path="/" friends={Friends} createFriend={CreateFriend} />
        <Route path="/login" component={Login} />
      </StyledApp>
    </Router>
  );
}

export default App;
