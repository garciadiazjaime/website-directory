import React from 'react'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
import ReactGA from 'react-ga'

const openCategory = category => {
  ReactGA.event({
    category: 'category-item',
    action: 'click',
    label: category.slug
  })
  window.location = category.slug
}

const itemStyle = {
  textAlign: 'center',
  lineHeight: '1',
  fontWeight: 'bold',
  padding: 10
}

const labelStyle = {
  fontSize: '24px'
}

const btnStyle = {
  width: '240px',
  height: '40px'
}

const Category  = ({ category }) => (
  <ListItem className="category" onClick={() => openCategory(category)} innerDivStyle={itemStyle}>
    <RaisedButton label={category.title} labelStyle={labelStyle} buttonStyle={btnStyle} />
  </ListItem>
)

const renderCategories = (categories) => categories ?
  categories.map(category => <Category category={category} key={category.slug} />)
  : null

const Categories = ({ category, categories }) => (
  !category ?
    <List>
      {renderCategories(categories)}
    </List>
  : null
)

export default Categories
