import React, { Component } from 'react'

export default class ImageList extends Component {
  componentDidMount () {
    console.log(this.props.images)
  }

  renderImages () {
    return this.props.images.map(({id, urls, description}) => {
      return (
        <img key={id} src={urls.regular} alt={description} />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderImages()}
      </div>
    )
  }
}
