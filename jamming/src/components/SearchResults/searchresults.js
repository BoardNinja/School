import React from 'react';
import ReactDOM from 'react-dom';
import './Tracklist';




class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
  <h2>Results</h2>
  {this.props.TrackList}
</div>
);
  }
}

export SearchResults;
