import React, { Component } from 'react'
import ImageCard from './ImageCard'
import './ImageList.css'

export default class ImageList extends Component {
  renderImages () {
    const images = this.props.images.map(image => {
      return (
        <ImageCard
          key={image.id}
          image={image}
        />
      )
    })

    return (
      <div className="image-list">
        {images}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderImages()}
      </div>
    )
  }
}
