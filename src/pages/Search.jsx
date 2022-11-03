import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  state = {
    buttonDisabled: true,
    inputText: '',
  };

  checkInput = ({ target: { value } }) => {
    const two = 2;
    if (value.length >= two) {
      this.setState({
        buttonDisabled: false,
      });
    }
    this.setState({
      inputText: value,
    });
  };

  render() {
    const { buttonDisabled, inputText } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="text"
          data-testid="search-artist-input"
          name="inputText"
          value={ inputText }
          onChange={ this.checkInput }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ buttonDisabled }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}
