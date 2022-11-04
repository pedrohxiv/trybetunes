import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

export default class MusicCard extends Component {
  state = {
    favorite: false,
    loading: false,
  };

  favoriteSong = () => {
    const { album } = this.props;
    this.setState({ loading: true }, async () => {
      await addSong(album);
      this.setState({
        loading: false,
        favorite: true,
      });
    });
  };

  render() {
    const { favorite, loading } = this.state;
    const { trackName, previewUrl, trackId } = this.props;
    return (
      <div>
        {loading === true ? (
          <Loading />
        ) : (
          <div>
            <p>{trackName}</p>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
            <label htmlFor="favorite">
              <input
                data-testid={ `checkbox-music-${trackId}` }
                type="checkbox"
                name="favorite"
                id="favorite"
                onChange={ this.favoriteSong }
                checked={ favorite }
              />
              Favorita
            </label>
          </div>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  album: PropTypes.arrayOf(PropTypes.string).isRequired,
};
