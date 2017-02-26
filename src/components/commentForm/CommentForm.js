import React, { Component } from 'react';

import styles from './style';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      comment: '',
      disabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(key) {
    console.log(this.state);
    return (event) => {
      this.setState({ [key]: event.target.value }, () => {
        const { username, comment } = this.state;
        const disabled = (username && comment ? false : true);

        this.setState({ disabled });
      });
    }
  }

  // Forme longue :
  // onInputChange(key) {
  //   console.log(this.state);
  //   return (event) => {
  //     this.setState({ [key]: event.target.value }, () => {
  //       if (this.state.username && this.state.comment) {
  //         this.setState({ disabled: false });
  //       } else {
  //         this.setState({disabled: true})
  //       }
  //     });
  //   }
  // }

  onFormSubmit() {
    console.log("Entre dans onSubmit");
  }

  render() {
    return (
      <div style={styles.container}>
        <div>
          <label>Username</label>
          <input placeholder="Your username" onChange={this.onInputChange('username')} />
        </div>

        <div>
          <label>Email</label>
          <input placeholder="Your email" onChange={this.onInputChange('email')} />
        </div>

        <div>
          <label>Comment</label>
          <textarea placeholder="Your comment" onChange={this.onInputChange('comment')} />
        </div>

        <button disabled={this.state.disabled} onClick={this.onFormSubmit}>Send a comment</button>
      </div>
    );
  }
}
