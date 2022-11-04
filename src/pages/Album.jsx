import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  state = {
    albums: [],
    nameArtist: '',
    nameAlbum: '',
    albumImage: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const album = await (getMusics(id));
    this.setState({
      albums: album,
      nameArtist: album[0].artistName,
      nameAlbum: album[0].collectionName,
      albumImage: album[0].artworkUrl100,
    });
  }

  render() {
    const { albums, nameArtist, nameAlbum, albumImage } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h3 data-testid="artist-name">{nameArtist}</h3>
        <h4 data-testid="album-name">{nameAlbum}</h4>
        <img src={ albumImage } alt={ nameAlbum } />
        {albums.slice(1).map((album) => (
          <div key={ album.collectionId }>
            <MusicCard
              trackName={ album.trackName }
              previewUrl={ album.previewUrl }
              trackId={ album.trackId }
              album={ album }
            />
          </div>
        ))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};
