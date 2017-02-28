import React, { Component, PropTypes } from 'react';

import { checkEmailFormat } from '../../utils/utils';
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
        const { comment, email, username } = this.state;
        const emailValue = (key === 'email' ? value : email);
        const correctFormatEmail = checkEmailFormat(emailValue);
        const disabled = (!username || !comment || (email && !correctFormatEmail)
          ? true
          : false
        );

        this.setState({ correctFormatEmail, disabled });
      });
    }
  }

  onFormSubmit() {
    const { username, email, comment } = this.state;
    const dateObject = new Date();
    const date = {
      day: dateObject.getDate(),
      month: dateObject.getMonth(),
      year: dateObject.getFullYear(),
      hours: dateObject.getHours(),
      minutes: dateObject.getMinutes(),
      seconds: dateObject.getSeconds(),
    };
    const newComment = { username, email, comment, date };
    const newComments = [ ...this.props.comments, newComment ];
    const stringifiedComments = JSON.stringify(newComments);

    localStorage.setItem('comments', stringifiedComments);
    this.props.addComments(newComments);
    this.setState(initialState);
  }

  render() {
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
            ? <div>Invalid email format</div>
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

CommentForm.propTypes = {
  addComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
