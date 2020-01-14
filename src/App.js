import React from 'react';

import SearchBar from './components/SearchBar';

export class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return <SearchBar onSubmit={this.onSearchSubmit} />
  }
}
