import React from 'react'
import {List, ListItem} from 'material-ui/List'
import ReactGA from 'react-ga'

const openCategory = category => {
  ReactGA.event({
    category: 'category-item',
    action: 'click',
    label: category.slug
  })
  window.location = category.slug
}

const Category  = ({ category }) => (
  <ListItem className="category" onClick={() => openCategory(category)}>
    <a>{category.title}</a>
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
