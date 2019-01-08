import React from 'react'
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ReactGA from 'react-ga'
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

const openMap = place => {
  if (place && place.google && place.google.url) {
    window.open(place.google.url)
    ReactGA.event({
      category: 'place-item',
      action: 'map',
      label: place.google.name
    })
  }
}

const openMenu = place => {
  if (place && place.google && place.google.name) {
    window.open(`https://www.google.com/search?q=${place.google.name}`)
    ReactGA.event({
      category: 'place-item',
      action: 'menu',
      label: place.google.name
    })
  }
}

const openTel = place => {
  if (place && place.google && place.google.international_phone_number) {
    window.open(`tel:${place.google.international_phone_number}`)
    ReactGA.event({
      category: 'place-item',
      action: 'tel',
      label: place.google.name
    })
  }
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
      <FlatButton label="Mapa" onClick={() => openMap(place)} />
      <FlatButton label="Menú" onClick={() => openMenu(place)} />
      <FlatButton label="Tel" onClick={() => openTel(place)} />
    </CardActions>
  </Card>
)

export default Element
