import React from 'react';

import mockList from '../../mockCommentList';
import Comment from '../comment/Comment';
import styles from './style';

export default function CommentList() {
  const listMapping = mockList.map((comment, index) => {
    return <Comment key={index} data={comment} />
  });

  return (
    <div style={styles.container}>
       {listMapping}
    </div>
  );
}
