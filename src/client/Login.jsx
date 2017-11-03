import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

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
      nameMessage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const englishChar = /[a-zA-Z]/;
    const { name, age } = event.target.elements;
    const data = {
      name: name.value,
      age: age.value
    };

    if (!englishChar.test(data.name)) {
      this.setState({ nameMessage: <NameMessage>English characters only</NameMessage> });
    } else {
      Axios.post('/add-data', data);
      window.location.href = '/doSomething';
    }
  }

  render() {
    return (
      <Wrapper onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Input type="text" name="name" required />
        </Label>
        {this.state.nameMessage}
        <Label>
          Password:
          <Input type="number" name="login" required />
        </Label>
        <Button type="Submit">Login</Button>
      </Wrapper>
    );
  }
}

export default Login;
