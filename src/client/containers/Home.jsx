import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser, logoutUser } from '../actions/auth_actions';

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
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    let signButton;
    let message;
    if (this.props.user.data.error || this.props.user.loggedOut) {
      message = 'Login Mate';
      signButton = (
        <ButtonWrapper>
          <StyledLink to="/login">Login</StyledLink>
        </ButtonWrapper>
      );
    } else {
      message = 'Welcome';
      signButton = (
        <ButtonWrapper>
          <StyledButton
            onClick={() => {
              this.props.logoutUser();
            }}
          >
            Logout
          </StyledButton>
        </ButtonWrapper>
      );
    }
    return (
      <Wrapper>
        <h1>
          {message} {this.props.user.data.username || ''}
          {signButton}
        </h1>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  fetchUser,
  logoutUser
};

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    data: PropTypes.object.isRequired,
    error: PropTypes.boolean,
    loggedOut: PropTypes.boolean
  }).isRequired
};

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
