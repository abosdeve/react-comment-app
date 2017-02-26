import React, { Component } from 'react';

import { checkEmailFormat } from './utils/utils';
import styles from './style';

const initialState = {
  correctFormatEmail: true,
  username: '',
  email: '',
  comment: '',
  disabled: true,
};

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(key) {
    return (event) => {
      const { value } = event.target;

      this.setState({ [key]: value }, () => {
        const { email, username, comment } = this.state;
        let disabled;

        if (key === 'email') {
          const correctFormatEmail = checkEmailFormat(value);

          disabled = (!username || !comment || (email && !correctFormatEmail) ? true : false);
          this.setState({ correctFormatEmail });
        } else {
          disabled = (username && comment ? false : true);
        }

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
    const { username, email, comment } = this.state;
    const date = new Date();
    const newComment = { username, email, comment, date };
    const comments = JSON.parse(localStorage.getItem('comments'));
    const newComments = [ ...comments, newComment ];
    const stringifiedComments = JSON.stringify(newComments);

    localStorage.setItem('comments', stringifiedComments);
    // this.props.updateComments(newComments);
    this.setState(initialState);
  }

  render() {
    console.log(this.state);
    return (
      <div style={styles.container}>
        <div>
          <label style={styles.elem}>Username</label>
          <input
            value={this.state.username}
            placeholder="Your username"
            onChange={this.onInputChange('username')}
          />
        </div>

        <div>
          <label style={styles.elem}>Email</label>
          <input
            value={this.state.email}
            placeholder="Your email"
            onChange={this.onInputChange('email')}
          />
          {this.state.email && !this.state.correctFormatEmail
            ? <div>Wrong format, please put a valid email.</div>
            : null
          }
        </div>

        <div>
          <label style={styles.elem}>Comment</label>
          <textarea
            value={this.state.comment}
            placeholder="Your comment"
            onChange={this.onInputChange('comment')}
        />
        </div>

        <button disabled={this.state.disabled} onClick={this.onFormSubmit}>Send a comment</button>
      </div>
    );
  }
}
