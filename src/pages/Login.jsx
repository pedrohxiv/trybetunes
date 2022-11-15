import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
import trybeTunes from '../images/logo.png';

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
      <div
        data-testid="page-login"
        className="bg-gradient-to-tl
         from-cyan-400 to-blue-700 min-h-screen flex justify-center items-center"
      >
        {loading === true ? (
          <Loading />
        ) : (
          <div
            className="bg-white flex
            justify-center items-center flex-col px-16 rounded-3xl w-2/3 h-2/3 py-32"
          >
            <img
              src={ trybeTunes }
              alt="Trybe Tunes"
            />
            {/* <label
              htmlFor="login-name-input"
              className="flex justify-center items-center flex-col gap-5"
            > */}
            <input
              placeholder="qual é o seu nome?"
              className="text-center w-2/3 py-3 rounded-3xl mt-16 mb-3
              placeholder:text-blue-700/50 border border-blue-700 text-blue-700"
              id="login-name-input"
              type="text"
              data-testid="login-name-input"
              name="inputName"
              value={ inputName }
              onChange={ this.checkInput }
            />
            {/* </label> */}
            <button
              className="bg-blue-700 text-white w-2/3 py-3 rounded-3xl"
              type="button"
              data-testid="login-submit-button"
              disabled={ buttonDisabled }
              onClick={ this.logging }
            >
              Entrar
            </button>
          </div>
        )}
        {logged === true && <Redirect to="/search" />}
      </div>
    );
  }
}
