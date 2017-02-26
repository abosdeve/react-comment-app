import React, { Component } from 'react';

import CommentList from './components/commentList/CommentList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Hello!
        <CommentList />
      </div>
    );
  }
}

export default App;
