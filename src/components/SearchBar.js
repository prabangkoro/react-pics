import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    keyword: ''
  }

  onFormSubmit = event => {
    event.preventDefault()

    this.props.onSubmit(this.state.keyword)
  }

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.keyword}
              onChange={e => this.setState({ keyword: e.target.value })}
              type="text"
            ></input>
          </div>
        </form>
      </div>
    )
  }
}
