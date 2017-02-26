import React, { Component } from 'react';

import CommentList from './components/commentList/CommentList';
import CommentForm from './components/commentForm/CommentForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export default App;
