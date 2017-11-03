import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.form`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const labelStyle = {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column'
};

class Signup extends Component {
  state = {
    nameMessage: '',
    emailMessage: '',
    passwordMessage: ''
  };

  componentWillMount() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      password: password.value
    };

    if (!data.name.trim() || !/[a-zA-Z]/.test(data.name)) {
      this.setState({ nameMessage: 'Invalid name' });
    } else {
      this.setState({ nameMessage: '' });
    }

    if (!data.email.trim()) {
      this.setState({ emailMessage: 'Please add an email' });
    } else {
      this.setState({ emailMessage: '' });
    }

    if (data.password.length < 8) {
      this.setState({ passwordMessage: 'The password must be atleast 8 characters' });
    } else if (!data.password.trim()) {
      this.setState({ passwordMessage: 'Must not contain empty spaces' });
    } else {
      this.setState({ passwordMessage: '' });
    }
    axios.post('/send', data);
  }
  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <label htmlFor style={labelStyle}>
          Name:
          <input type="text" name="name" />
          {this.state.nameMessage}
        </label>
        <label htmlFor style={labelStyle}>
          Email:
          <input type="email" name="email" />
          {this.state.emailMessage}
        </label>
        <label htmlFor style={labelStyle}>
          Password:
          <input type="password" name="password" />
        </label>
        {this.state.passwordMessage}
        <button type="Submit">Submit</button>
      </Wrapper>
    );
  }
}

export default Signup;
