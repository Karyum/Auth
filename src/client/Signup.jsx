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
    passwordMessage: '',
    requestMessage: '',
    confirmMessage: ''
  };

  componentWillMount() {
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { name, email, password, confirmPassword } = event.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    };

    if (!data.name.trim() || !/[a-z]/.test(data.name)) {
      return this.setState({ nameMessage: 'lowercase english only' });
    }
    this.setState({ nameMessage: '' });

    if (!data.email.trim()) {
      return this.setState({ emailMessage: 'Please add an email' });
    }
    this.setState({ emailMessage: '' });

    if (data.password.length < 8) {
      return this.setState({ passwordMessage: 'The password must be atleast 8 characters' });
    } else if (!data.password.trim()) {
      return this.setState({ passwordMessage: 'Must not contain empty spaces' });
    }
    this.setState({ passwordMessage: '' });

    if (data.password !== data.confirmPassword) {
      return this.setState({ confirmMessage: 'The password is not the same' });
    }
    this.setState({ confirmMessage: '' });

    try {
      const res = await axios.post('/signup', data);
      if (res.data) {
        this.setState({ requestMessage: res.data });
      } else {
        window.location.href = '/login';
      }
    } catch (err) {
      window.location.href = '/404';
    }
  }
  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <label style={labelStyle}>
          Name:
          <input type="text" name="name" />
          {this.state.nameMessage}
        </label>
        <label style={labelStyle}>
          Email:
          <input type="email" name="email" />
          {this.state.emailMessage}
        </label>
        <label style={labelStyle}>
          Password:
          <input type="password" name="password" />
        </label>
        {this.state.passwordMessage}
        <label style={labelStyle}>
          Confirm password:
          <input type="password" name="confirmPassword" />
        </label>
        {this.state.confirmMessage}
        <button type="Submit" style={{ marginTop: '2rem' }}>
          Submit
        </button>
        {this.state.requestMessage}
      </Wrapper>
    );
  }
}

export default Signup;
