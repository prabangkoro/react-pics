import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class App extends Component {
  onFormSubmit (text) {
    console.log(text)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    )
  }
}
