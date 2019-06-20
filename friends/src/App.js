import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Friends from './components/Friends';
import CreateFriend from './components/CreateFriend';
import Login from './components/Login';
import PrivateRouter from './components/PrivateRoute';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <PrivateRouter exact path="/" friends={Friends} createFriend={CreateFriend} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
