import React, { Component } from 'react';

import CommentList from './components/commentList/CommentList';
import CommentForm from './components/commentForm/CommentForm';

import styles from './style.js';

class App extends Component {
  constructor() {
    super();

    this.state = { comments: [] };

    this.addComments = this.addComments.bind(this);
  }

  componentDidMount() {
    const stringifiedComments = localStorage.getItem('comments');
    let comments = [];

    if (!stringifiedComments) {
      localStorage.setItem('comments', '[]');
    } else {
      comments = JSON.parse(stringifiedComments);
    }

    this.setState({ comments });
  }

  addComments(comments) {
    this.setState({ comments });
  }

  render() {
    return (
      <div style={styles}>
      <CommentList comments={this.state.comments} />
      <CommentForm
        addComments={this.addComments}
        comments={this.state.comments}
      />
      </div>
    );
  }
}

export default App;
