import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRouter from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <h1>Friends</h1>
        {/* <Route exact path="/" component={Friends} /> */}
        <PrivateRouter exact path="/" component={Friends} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
