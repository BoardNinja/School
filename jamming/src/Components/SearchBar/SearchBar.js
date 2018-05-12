import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : ''};
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNamemChange = this.handleNameChange.bind(this);
  }

  handleSearch() {
    this.props.onSearch(this.state.Name);
  }

  handleNameChange(event) {
      this.setState( {name: event.target.value} );
    }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleNameChange} />
        <a onClick= {this.handleSearch}>SEARCH</a>
      </div>
    );
  }
}
export default SearchBar;
