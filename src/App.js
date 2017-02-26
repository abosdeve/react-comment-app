import React, { Component } from 'react';

import CommentList from './components/commentList/CommentList';
import CommentForm from './components/commentForm/CommentForm';
import './App.css';

import styles from './style.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { comments: [] };

    this.updateComments = this.updateComments.bind(this);
  }

  componentDidMount() {
    let comments = localStorage.getItem('comments');

    if (!comments) {
      localStorage.setItem('comments', JSON.stringify([]));
      comments = '[]';
    }
    this.setState({ comments: JSON.parse(comments) });
  }

  updateComments(comments) {
    this.setState({ comments });
  }

  render() {
    return (
      <div style={styles}>
        <CommentList />
        <CommentForm
          updateComments={this.updateComments}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default App;
