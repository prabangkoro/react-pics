import React, { Component } from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'

export default class App extends Component {
  state = {
    images: []
  }

  onFormSubmit = async query => {
    const response = await unsplash.get('/search/photos', {
      params: { query }
    })

    this.setState({
      images: response.data.results
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        Found {this.state.images.length} images.
      </div>
    )
  }
}
