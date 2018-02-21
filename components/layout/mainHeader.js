import React from 'react'
import Router from 'next/router'
import AppBar from 'material-ui/AppBar'

const style = {
  backgroundColor: '#c10808'
}

export default () => (
  <AppBar
    title="Qué se te antoja?"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={style}
    onLeftIconButtonClick={() => Router.push('/')}
  />
)
