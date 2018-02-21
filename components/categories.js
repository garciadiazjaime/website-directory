import React from 'react'
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

const Category  = ({ category }) => (
  <ListItem className="category">
    <a href={`${category.slug}`}>{category.title}</a>
  </ListItem>
)

const style = {
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
};

const Categories = ({ categories }) => (
  <Paper style={style} zDepth={1}>
    <List>
      {
        categories ?
          categories.map(category => <Category category={category} key={category.slug} />)
          : null
      }
    </List>
  </Paper>
)

export default Categories
