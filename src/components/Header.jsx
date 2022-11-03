import React, { Component } from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  state = {
    loading: false,
    user: '',
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      this.setState({
        loading: false,
        user: await getUser(),
      });
    });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <header data-testid="header-component">
        {loading === true ? (
          <Loading />
        ) : (
          <p data-testid="header-user-name">{`${user.name}`}</p>
        )}
      </header>
    );
  }
}
