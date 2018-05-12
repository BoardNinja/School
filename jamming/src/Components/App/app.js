import React from 'react';
import '../App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';

class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    searchResults: [],
    playlistName: 'Our Playlist',
    playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
this.search = this.search.bind(this);
}

    }


  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
return;
} else {
  let Tracks = this.state.playlistTracks;
  tracks.push(track);
  this.setState({playlistTracks:tracks});
}
}

removeTrack(track) {
  let tracks = this.state.playlistTracks;
  let filteredTracks = tracks.filter(savedTrack => track.id !== savedTrack.id);
  this.setState( {playlistTracks: filteredTracks} );
  console.log(filteredTracks);
}

  updatePlaylistName(name) {
    this.setState( {playlistName: name} );
  }
  savePlaylist(){
    this.setState( {Playlist: onSave} );
  }
    search(){
      this.setState( {SearchBar: onSearch});
      console.log(onSearch);
    }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    {this.state.playlist.Name}
    <div className="App-playlist">
      {this.state.playlist.Artist}
      {this.state.playlist.Album}
    </div>
  </div>
</div>
);
  }
}

ReactDOM.render(<App />,
documents.getElementById('app'));
