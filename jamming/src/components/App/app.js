import React from 'react';
import ReactDOM from 'react-dom';
import '../Playlist/Playlist';
import '../SearchBar/SearchBar';
import '../SearchResults/SearchResults';
import './app.css';

class app extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchResults = {
      name: '',
      artist: '',
      album: '',
      id: ''

    };
      this.state.searchResults = this.state.searchResults.bind(this);
}

    }


  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
return;
} else {
  let Tracks = this.state.playlistTracks;
  tracks.push(track);
  this.setState({playlistTracks:tracks});
}
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
