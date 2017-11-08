import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Label = styled.label`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

const NameMessage = styled.span`
  margin-top: 1rem;
  color: red;
  font-size: 1rem;
`;

const Input = styled.input`
  display: inline-block;
`;
const Wrapper = styled.form`
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 1rem;
`;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      nameMessage: '',
      loginMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const englishChar = /[a-zA-Z]/;
    const { username, password } = event.target.elements;
    const data = {
      username: username.value,
      password: password.value
    };

    if (!englishChar.test(data.username)) {
      this.setState({ nameMessage: <NameMessage>English characters only</NameMessage> });
    } else {
      axios
        .post('/login', data)
        .then(res => {
          if (res.data.error) {
            this.setState({ loginMessage: res.data.error });
          } else {
            window.location.href = '/';
          }
        })
        .catch(() => this.setState({ loginMessage: 'Something went wrong please try again' }));
    }
  }

  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Input type="text" name="username" required />
        </Label>
        {this.state.nameMessage}
        <Label>
          Password:
          <Input type="password" name="password" required />
        </Label>
        <Button type="Submit">Login</Button>
        {this.state.loginMessage}
        <Link to="/signup">Signup</Link>
      </Wrapper>
    );
  }
}

export default Login;
