import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  border: 0.1rem black solid;
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-decoration: none;
  color: black;
  font-size: 2rem;
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: 0.1rem black solid;
  border-radius: 0.5rem;
  margin-top: 1rem;
  color: black;
  background-color: white;
  font-size: 2rem;
`;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      message: '',
      sign: false
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  async componentWillMount() {
    try {
      const username = document.cookie
        .split(';')
        .filter(cookie => cookie.indexOf('username') > -1)[0]
        .split('username=')[1];
      const { data } = await axios.post('/verify', { username });
      if (data.error) {
        return this.setState({ message: 'Login mate', sign: false });
      }
      return this.setState({ user: data, message: 'Welcome ', sign: true });
    } catch (err) {
      return this.setState({ message: 'Login mate', sign: false });
    }
  }

  handleLogout() {
    document.cookie = 'username=';
    document.cookie = 'token=';
    this.setState({ message: 'Login mate', sign: false, user: {} });
  }

  render() {
    let signButton;
    if (this.state.sign) {
      signButton = (
        <ButtonWrapper>
          <StyledButton onClick={this.handleLogout}>Logout</StyledButton>
        </ButtonWrapper>
      );
    } else {
      signButton = (
        <ButtonWrapper>
          <StyledLink to="/login">Login</StyledLink>
        </ButtonWrapper>
      );
    }
    return (
      <Wrapper>
        <h1>
          {this.state.message} {this.state.user.username}
          {signButton}
        </h1>
      </Wrapper>
    );
  }
}

export default Home;
