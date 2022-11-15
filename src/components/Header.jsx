import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';
import trybeTunes from '../images/logo.png';

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
      <header
        data-testid="header-component"
        className="flex min-h-screen max-h-screen overflow-y-hidden w-2/12"
      >
        {loading === true ? (
          <Loading />
        ) : (
          <div className="flex flex-col items-center p-6 justify-between">
            <img
              className="w-18"
              src={ trybeTunes }
              alt="Trybe Tunes"
            />
            <div className="flex flex-col gap-12">
              <Link
                to="/search"
                data-testid="link-to-search"
              >
                Pesquisa
              </Link>
              <Link
                to="/favorites"
                data-testid="link-to-favorites"
              >
                Favoritos
              </Link>
              <Link
                to="/profile"
                data-testid="link-to-profile"
              >
                Perfil
              </Link>
            </div>
            <p data-testid="header-user-name">{`${user.name}`}</p>
          </div>
        )}
      </header>
    );
  }
}
