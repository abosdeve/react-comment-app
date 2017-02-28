import React, { PropTypes } from 'react';

import Comment from '../comment/Comment';
import styles from './style';

export default function CommentList({ comments }) {
  const listMapping = comments.slice(0).reverse().map((comment, index) => {
    return <Comment key={index} data={comment} />
  });

  return (
    <div style={styles.container}>
       {listMapping}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
