import React from 'react'
import Router from 'next/router'
import AppBar from 'material-ui/AppBar'

import { getCategoryLabel } from '../../services/places'

const style = {
  backgroundColor: '#c10808'
}

export default ({ category }) => (
  <AppBar
    title={category ? getCategoryLabel(category) : 'Qué se te antoja?'}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={style}
    onLeftIconButtonClick={() => Router.push('/')}
  />
)
