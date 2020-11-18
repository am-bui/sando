import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Napoletana Pizzeria',
  address: '1010 This Way',
  city: 'Thattown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
 business,
 business,
 business,
 business,
 business,
 business,
]

class App extends React.Component {
  // these params rep the three pieces of info that'll be sent to the Yelp API
  searchYelp(term, location, sortBy) {
    // partial functionality to simulate a search
    console.log(`You are searching ${sortBy} restaurants for ${term} in ${location}.`)
  }

  render() {
    return (
      <div className="App">
        <h1>sando</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={ businesses }/>
      </div>
    );
  }
}

export default App;