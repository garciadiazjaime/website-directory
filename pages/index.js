import React from 'react'

import Layout from '../components/layout/layout'
import Place from '../components/place'
import Categories from '../components/categories'
import { getPlaces, getCategories } from '../services/places'

const renderPlace = places => places.map(place => <Place place={place} key={place.placeId} />)

const HomePage = ({ places }) => (
  <Layout>
    <section className="categories-content">
      <Categories categories={getCategories()} />
    </section>
    {
      places && places.length ?
        <div>
          <h2>Lugares: </h2>
          <section className="places-content">
            {renderPlace(places)}
          </section>
        </div>
      : null
    }
  </Layout>
)

HomePage.getInitialProps = async ({ query }) => {
  const places = query.category ? await getPlaces(query.category) : []
  return { places }
}

export default HomePage
