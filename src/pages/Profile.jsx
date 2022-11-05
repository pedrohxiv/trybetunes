import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Profile extends Component {
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
      <div data-testid="page-profile">
        <Header />
        {loading === true ? (
          <Loading />
        ) : (
          <div>
            <img data-testid="profile-image" src={ user.image } alt={ user.name } />
            <Link to="/profile/edit">Editar perfil</Link>
            <h5>Nome</h5>
            <p>{user.name}</p>
            <h5>E-mail</h5>
            <p>{user.email}</p>
            <h5>Descrição</h5>
            <p>{user.description}</p>
          </div>
        )}
      </div>
    );
  }
}
