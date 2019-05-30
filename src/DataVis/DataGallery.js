import React, { Component } from 'react'

import ReactBnbGallery from 'react-bnb-gallery'

import cma from './images/cma.png'
import completion from './images/completion.png'
import summary from './images/summary.png'

import {
  Button
} from '@material-ui/core'

const photos = [{
  photo: cma,
  caption: "This is a report for an online education provider",
  subcaption: "Photo by Simon Matzinger on Unsplash",
  thumbnail: cma,
}, {
  photo: completion,
  caption: "This is a completion report",
  subcaption: "Photo by Gerardo Sanchez on Unsplash",
  thumbnail: completion,
}, {
  photo: summary,
  caption: "This is a summary spreasheet report",
  subcaption: "Photo by Hannah Cauhepe on Unsplash This is an extremely long sub caption with a lot of words",
  thumbnail: summary,
}];

class Example extends Component {
  constructor() {
    super(...arguments);
    this.state = { galleryOpened: false };
    this.toggleGallery = this.toggleGallery.bind(this);
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened
    }));
  }

  render () {
    return (
      <div>
      <Button onClick={this.toggleGallery} variant='contained'>
        Open spreadsheet gallery
      </Button>
      <ReactBnbGallery
      opacity={0.5}
        show={this.state.galleryOpened}
        photos={photos}
        onClose={this.toggleGallery} />
        </div>
    )
  }
}

export default Example