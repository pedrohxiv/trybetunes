import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <div>
            <Link to="/search" data-testid="link-to-search">
              Pesquisa
            </Link>
            <Link to="/favorites" data-testid="link-to-favorites">
              Favoritos
            </Link>
            <Link to="/profile" data-testid="link-to-profile">
              Perfil
            </Link>
            <p data-testid="header-user-name">{`${user.name}`}</p>
          </div>
        )}
      </header>
    );
  }
}
