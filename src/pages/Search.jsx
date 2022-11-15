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
      <div
        data-testid="page-search"
        className="flex"
      >
        <Header />
        <div className="flex flex-col w-full">
          <div
            className="bg-gradient-to-tl
          from-cyan-400 to-blue-700 h-52 flex justify-center items-center gap-2"
          >
            <input
              type="text"
              data-testid="search-artist-input"
              name="inputText"
              value={ inputText }
              onChange={ this.checkInput }
              className="bg-gray-300 w-80 placeholder:uppercase placeholder:text-white
            text-white py-2 px-4 rounded-3xl opacity-50"
              placeholder="digite a sua pesquisa"
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ buttonDisabled }
              onClick={ this.searchAlbum }
              className="bg-teal-300 text-white uppercase py-2 px-4 rounded-3xl"
            >
              Procurar
            </button>
          </div>
          <div className="h-142 overflow-y-auto bg-gray-100">
            <p className="text-blue-700 text-xl text-center my-8">
              {`Resultado de álbuns de: ${artist}`}
            </p>
            <div className="flex justify-center flex-wrap">
              {albums.length === 0 ? (
                <p className="text-gray-300 text-3xl">Nenhum álbum foi encontrado</p>
              ) : (
                albums.map((album) => (
                  <div
                    key={ album.collectionId }
                    className="m-5 w-44 h-64"
                  >
                    <Link
                      to={ `/album/${album.collectionId}` }
                      data-testid={ `link-to-album-${album.collectionId}` }
                    >
                      <img
                        src={ album.artworkUrl100 }
                        alt={ album.collectionName }
                        className=" w-44 h-44"
                      />
                      <p className="text-left text-sm font-semibold">
                        {album.collectionName}
                      </p>
                      <p className="text-left text-xs">{album.artistName}</p>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
