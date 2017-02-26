import React, { Component } from 'react';

import CommentList from './components/commentList/CommentList';
import CommentForm from './components/commentForm/CommentForm';
import './App.css';

import styles from './style.js';

class App extends Component {
  componentDidMount() {
    localStorage.setItem('comments', JSON.stringify([]));
  }

  render() {
    return (
      <div style={styles}>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export default App;
