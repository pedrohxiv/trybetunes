import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  state = {
    buttonDisabled: true,
    inputName: '',
    loading: false,
    logged: false,
  };

  checkInput = ({ target: { value } }) => {
    const three = 3;
    if (value.length >= three) {
      this.setState({
        buttonDisabled: false,
      });
    }
    this.setState({
      inputName: value,
    });
  };

  logging = () => {
    const { inputName } = this.state;
    this.setState({ loading: true }, async () => {
      await createUser({ name: inputName });
      this.setState({
        loading: false,
        logged: true,
      });
    });
  };

  render() {
    const { buttonDisabled, inputName, loading, logged } = this.state;
    return (
      <div data-testid="page-login">
        {loading === true ? (
          <Loading />
        ) : (
          <div>
            <h1>TrybeTunes</h1>
            <label htmlFor="login-name-input">
              Nome
              <input
                id="login-name-input"
                type="text"
                data-testid="login-name-input"
                name="inputName"
                value={ inputName }
                onChange={ this.checkInput }
              />
              <button
                type="button"
                data-testid="login-submit-button"
                disabled={ buttonDisabled }
                onClick={ this.logging }
              >
                Entrar
              </button>
            </label>
          </div>
        )}
        {logged === true && <Redirect to="/search" />}
      </div>
    );
  }
}
