import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';

export default class ProfileEdit extends Component {
  state = {
    loading: false,
    name: '',
    email: '',
    description: '',
    image: '',
    saved: false,
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      this.setState({
        loading: false,
        name: user.name,
        email: user.email,
        description: user.description,
        image: user.image,
      });
    });
  }

  handleChange = ({ target: { name, value } }) => (
    this.setState({ [name]: value }));

  validate = () => {
    const { name, email, description, image } = this.state;
    return !name || !/\S+@\S+\.\S+/.test(email) || !description || !image;
  };

  save = () => {
    const { name, email, description, image } = this.state;
    this.setState({ loading: true }, async () => {
      await updateUser({ name, email, description, image });
      this.setState({ loading: false, saved: true });
    });
  };

  render() {
    const { loading, name, email, description, image, saved } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {loading === true ? (
          <Loading />
        ) : (
          <div>
            <img src={ image } alt={ name } />
            <input
              data-testid="edit-input-image"
              type="text"
              name="image"
              id="image"
              value={ image }
              onChange={ this.handleChange }
              required
            />
            <h4>Nome</h4>
            <label htmlFor="name">
              Fique à vontade de usar seu nome social
              <input
                data-testid="edit-input-name"
                type="text"
                name="name"
                id="name"
                value={ name }
                onChange={ this.handleChange }
                required
              />
            </label>
            <h4>E-mail</h4>
            <label htmlFor="email">
              Escolha um e-mail que constuma usar diariamente
              <input
                data-testid="edit-input-email"
                type="text"
                name="email"
                id="email"
                value={ email }
                onChange={ this.handleChange }
                required
              />
            </label>
            <h4>Descrição</h4>
            <textarea
              data-testid="edit-input-description"
              name="description"
              id="description"
              value={ description }
              onChange={ this.handleChange }
              required
            />
            <button
              data-testid="edit-button-save"
              type="submit"
              onClick={ this.save }
              disabled={ this.validate() }
            >
              salvar
            </button>
          </div>
        )}
        {saved === true && <Redirect to="/profile" />}
      </div>
    );
  }
}
