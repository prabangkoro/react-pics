import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    term: ''
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
            ></input>
          </div>
        </form>
      </div>
    )
  }
}
