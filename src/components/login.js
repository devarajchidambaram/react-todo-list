import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import { connect } from "react-redux";
import {login as loginAction} from '../actions/userAction'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    }
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {

    event.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;

    
    if (username && password) {
      console.log('this.submitting----------------=====', this.props)
        this.props.login({username, password});
    }

  }

  render() {
    return (
      <div className="Login">
          <h3>Login ...</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username" bsSize="large">
            <Form.Control
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder='Enter username ...'
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder='Enter password ...'
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

// Get state data from store to props
const mapStateToProps = (state) => {
  console.log('state========mapstate to props========', state)
  return {
    ...state.authenticationReducer
  };
}


// Get actions to handle store data
const mapDispatchToProps = (dispatch) => {
  return {
      login: (payload) => dispatch(loginAction(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);