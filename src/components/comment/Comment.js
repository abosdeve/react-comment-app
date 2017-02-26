import React, { PropTypes } from 'react';

import styles from './style';

export default function Comment({ data }) {
  const { username, email, date, comment } = data;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.elem}>{username}</div>
        <div style={styles.elem}>({email})</div>
        <div>{date}</div>
      </div>
      <div style={styles.body}>{comment}</div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape().isRequired,
};
