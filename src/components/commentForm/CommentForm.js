import React, { Component } from 'react';

import styles from './style';

function checkEmailFormat(value) {
  const filter = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return filter.test(value);
}

export default class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctFormatEmail: true,
      username: '',
      email: '',
      comment: '',
      disabled: true,
    };

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
  }

  render() {
    console.log(this.state);
    return (
      <div style={styles.container}>
        <div>
          <label style={styles.elem}>Username</label>
          <input placeholder="Your username" onChange={this.onInputChange('username')} />
        </div>

        <div>
          <label style={styles.elem}>Email</label>
          <input placeholder="Your email" onChange={this.onInputChange('email')} />
          {this.state.email && !this.state.correctFormatEmail
            ? <div>Wrong format, please put a valid email.</div>
            : null
          }
        </div>

        <div>
          <label style={styles.elem}>Comment</label>
          <textarea placeholder="Your comment" onChange={this.onInputChange('comment')} />
        </div>

        <button disabled={this.state.disabled} onClick={this.onFormSubmit}>Send a comment</button>
      </div>
    );
  }
}
