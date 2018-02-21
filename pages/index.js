import React from 'react'

import Layout from '../components/layout/layout'
import Place from '../components/place'
import Category from '../components/category'
import { getPlaces } from '../services/places'

const categories = [{
  title: 'Tacos',
  slug: 'tacos',
  image: 'https://assets3.thrillist.com/v1/image/2706777/size/tmg-article_default_mobile.jpg',
}, {
  title: 'Pizza',
  slug: 'pizza',
  image: 'http://www.usmag.club/wp-content/uploads/2016/05/How-To-Make-Pizza-At-Home-1-789x445.jpg'
}, {
  title: 'Burger',
  slug: 'burger',
  image: 'http://aprovacao.digicriativa.com.br/rioexperience/blog/wp-content/uploads/2013/09/tt.jpg'
}, {
  title: 'Sushi',
  slug: 'sushi',
  image: 'https://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/sushi_main_0.jpg'
}, {
  title: 'Restaurante',
  slug: 'restaurante',
  image: 'https://www.shareicon.net/data/2015/12/01/680795_fork_512x512.png'
}, {
  title: 'Café',
  slug: 'cafe',
  image: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1107769/2800/2800/m1/fpnw/wm1/coffee-logo-.jpg?1458663615&s=9e7528914f57f153e06559942e56ca19'
}, {
  title: 'Máriscos',
  slug: 'mariscos',
  image: 'https://toriavey.com/images/2012/07/Crispy-Fish-Tacos.jpg'
}]

const renderCategories = categories => categories.map(category => <Category category={category} key={category.slug} />)
const renderPlace = places => places.map(place => <Place place={place} key={place.placeId} />)

const HomePage = ({ places }) => (
  <Layout>
    <section className="categories-content">
      {renderCategories(categories)}
    </section>
    <h2>Lugares: </h2>
    <section className="places-content">
      {renderPlace(places)}
    </section>
    <style jsx global>{`
      .categories-content {
      }
    `}
    </style>
  </Layout>
)

HomePage.getInitialProps = async ({ query }) => {
  const places = query.category ? await getPlaces(query.category) : []
  return { places }
}

export default HomePage
