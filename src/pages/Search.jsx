import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  state = {
    buttonDisabled: true,
    inputText: '',
    albums: [],
    artist: '',
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

  searchAlbum = async () => {
    const { inputText } = this.state;
    this.setState({
      inputText: '',
      albums: await searchAlbumsAPI(inputText),
      artist: inputText,
    });
  };

  render() {
    const { buttonDisabled, inputText, albums, artist } = this.state;
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
          onClick={ this.searchAlbum }
        >
          Pesquisar
        </button>
        <div>
          <p>{`Resultado de álbuns de: ${artist}`}</p>
          {albums.length === 0 ? (
            <p>Nenhum álbum foi encontrado</p>
          ) : (
            albums.map((album) => (
              <div key={ album.collectionId }>
                <Link
                  to={ `/album/${album.collectionId}` }
                  data-testid={ `link-to-album-${album.collectionId}` }
                >
                  <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                  <p>{album.collectionName}</p>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
