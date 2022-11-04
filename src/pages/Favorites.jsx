import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class Favorites extends Component {
  state = {
    loading: false,
    albums: [],
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      this.setState({
        loading: false,
        albums: await getFavoriteSongs(),
      });
    });
  }

  removeFavorite = async (id) => {
    const { albums } = this.state;
    this.setState({ loading: true }, async () => {
      await removeSong(albums.find((album) => album.trackId === +id));
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
