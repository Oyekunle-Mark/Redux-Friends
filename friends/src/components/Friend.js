import React from 'react';

const Friend = ({ friend }) => (
  <div>
    <h4>
      {friend.name}, <span>{friend.age}</span>
    </h4>
    <p>{friend.email}</p>
  </div>
);

export default Friend;
