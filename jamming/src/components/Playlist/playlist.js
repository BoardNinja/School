import React from 'react';
import ReactDOM from 'react-dom';
import './playlist.css';
import './TrackList';


export class Playlist extends React.Component {
  render () {
    return(
      <div className="Playlist">
        <input value="New Playlist"/>
        {this.props.playTrackList}
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>

    );
  }
}
