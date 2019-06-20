import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  friends: Friends,
  createFriend: CreateFriend,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('friendAppToken') ? (
        <div>
          <CreateFriend {...props} />
          <Friends {...props} />
        </div>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
