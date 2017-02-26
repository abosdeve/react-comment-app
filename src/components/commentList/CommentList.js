import React from 'react';

import mockList from '../../mockCommentList';
import Comment from '../comment/Comment';
import styles from './style';

export default function CommentList({ comments }) {
  //const comments = JSON.parse(localStorage.getItem('comments'));

  console.log('Comments :', comments);
  const listMapping = comments.map((comment, index) => {
    return <Comment key={index} data={comment} />
  });

  return (
    <div style={styles.container}>
       {listMapping}
    </div>
  );
}
