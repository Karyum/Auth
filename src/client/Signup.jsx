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
    requestMessage: ''
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

    return axios
      .post('/signup', data)
      .then(res => {
        if (res.data) {
          this.setState({ requestMessage: res.data });
        } else {
          window.location.href = '/login';
        }
      })
      .catch(err => {
        console.log(err);
        window.location.href = '/404';
      });
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
        <button type="Submit">Submit</button>
        {this.state.requestMessage}
      </Wrapper>
    );
  }
}

export default Signup;
