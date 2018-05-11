import React from 'react';
import ReactDOM from 'react-dom';



class Tracklist extends React.Component {
  render(){
    return(
      <div className="TrackList">
        {

          this.props.tracks.map(track => {
            return <track track={track} key={track.id} />
        }
      </div>

    );
  }
}

export TrackList;
