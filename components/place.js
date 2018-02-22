import React from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import LazyLoad from 'react-lazyload'

const titleStyle = {
  padding: '0 16px 0'
}

const ctaStyle = {
  padding: '0 0 16px'
}

const imageStyle = {
  width: '100%',
  height: 'auto'
}

const toTitle = title => {
  const bits = title.toLowerCase().split(' ')
  return bits.map(bit => `${bit.charAt(0).toUpperCase()}${bit.substr(1)}`).join(' ')
}

const Element = ({ place }) => (
  <Card>
    <CardMedia>
      <LazyLoad height={300} once>
        <img
          src={place.google.photos.length ? place.google.photos[0] : `/static/images/categories/${place.category}.jpg`}
          alt={place.google.name}
          style={imageStyle}
        />
      </LazyLoad>
    </CardMedia>
    <CardTitle title={toTitle(place.google.name)} style={titleStyle} />
    <CardActions style={ctaStyle}>
      <FlatButton label="Menú" />
      <FlatButton label="Mapa" />
      <FlatButton label="Tel" />
    </CardActions>
  </Card>
)

export default Element
