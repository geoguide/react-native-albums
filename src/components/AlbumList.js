import React from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums', { method: 'GET' }).then(response => response.json()).then(response => {
      this.setState({ albums: response });
      console.log(this.state);
    }).catch(error => {
      console.error(error);
    });
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail album={album} key={album.title} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
