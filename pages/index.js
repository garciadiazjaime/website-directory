import React from 'react'

import Layout from '../components/layout/layout'
import Place from '../components/place'
import { getPlaces } from '../services/places'

const categories = [{
  title: 'Tacos',
  slug: 'tacos'
}, {
  title: 'Pizza',
  slug: 'pizza'
}, {
  title: 'Hamburguesa',
  slug: 'hamburguesa'
}, {
  title: 'Sushi',
  slug: 'sushi'
}]

const renderPlace = places => places.map(place => <Place place={place} />)

const HomePage = ({ places }) => (
  <Layout>
    {renderPlace(places)}
  </Layout>
)

HomePage.getInitialProps = async () => {
  const places = await getPlaces()
  return { places }
}

export default HomePage
