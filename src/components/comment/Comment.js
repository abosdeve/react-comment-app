import React, { PropTypes } from 'react';

export default function Comment({ data }) {
  const { username, email, date, comment } = data;

  return (
    <div>
      <div>{username}</div>
      <div>{email}</div>
      <div>{date}</div>
      <div>{comment}</div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape().isRequired,
};
