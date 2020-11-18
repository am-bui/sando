import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // term refers to search term located in search input
      term: "",
      // location refers to the location to search near from the location input
      location: "",
      // sortBy represents the selected sorting option to use
      sortBy: "best_match",
    }

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } 
    return '';
  }

  // this method sets the state of a sorting option
  // it will be used in communicating with the Yelp API
  handleSortByChange(sortByOption) {
    // update the sortBy in the state with the value of the method's arg
    this.setState({ sortBy: sortByOption })
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="www.#.com">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;