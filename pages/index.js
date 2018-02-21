import React from 'react'

import Layout from '../components/layout/layout'
import Place from '../components/place'
import Categories from '../components/categories'
import { getPlaces, getCategories } from '../services/places'

const renderPlace = places => places.map(place => <Place place={place} key={place.placeId} />)

const HomePage = ({ category, places }) => (
  <Layout category={category}>
    <section className="categories-content">
      <Categories categories={getCategories()} category={category} />
    </section>
    {
      places && places.length ?
        <section className="places-content">
          {renderPlace(places)}
        </section>
      : null
    }
  </Layout>
)

HomePage.getInitialProps = async ({ query }) => {
  const places = query.category ? await getPlaces(query.category) : []
  return { places, category: query.category }
}

export default HomePage
