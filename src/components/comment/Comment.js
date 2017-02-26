import React, { PropTypes } from 'react';

import { formatDate } from './utils/utils';
import styles from './style';

export default function Comment({ data }) {
  const { username, email, date, comment } = data;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.elem}>{username}</div>
        {email
          ? <div style={styles.elem}>({email})</div>
          : null
        }
        <div>{formatDate(date)}</div>
      </div>
      <div style={styles.body}>{comment}</div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape().isRequired,
};
