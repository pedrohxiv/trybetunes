import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class Favorites extends Component {
  state = {
    loading: false,
    albums: [],
  };

  componentDidMount() {
    this.removeFavorite();
  }

  removeFavorite = async () => {
    this.setState({ loading: true }, async () => {
      this.setState({
        loading: false,
        albums: await getFavoriteSongs(),
      });
    });
  };

  render() {
    const { loading, albums } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {loading === true ? (
          <Loading />
        ) : (
          albums.map((album) => (
            <div key={ album.collectionId }>
              <img src={ album.artworkUrl100 } alt={ album.collectionName } />
              <MusicCard
                trackName={ album.trackName }
                previewUrl={ album.previewUrl }
                trackId={ album.trackId }
                album={ album }
                removeFavorite={ this.removeFavorite }
              />
            </div>
          ))
        )}
      </div>
    );
  }
}
