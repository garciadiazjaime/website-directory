import React from 'react'
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

const Category  = ({ category }) => (
  <ListItem className="category">
    <a href={`${category.slug}`}>{category.title}</a>
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
