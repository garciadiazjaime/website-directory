import React from 'react'
import LazyLoad from 'react-lazyload'

import Layout from '../components/layout/layout'
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

const renderPlace = (places) => {
  return places.map(place => (
    <div key={place.placeId} className="place">
      <div className="image-contain">
        <div className="image-wrapper">
          {
            place.google.photos.length ?
              <LazyLoad height={200} once>
                <img src={place.google.photos[0]} alt={place.google.name} />
              </LazyLoad> : null
          }
        </div>
      </div>
      <div className="info-contain">
        <h2>{place.google.name}</h2>
      </div>
      <style jsx global>{`
        .place {
          margin: 20px 0 0;
          background-color: #FFF;
          display: flex;
          padding-bottom: 12px;
          align-items: center;
        }

        .image-contain {

        }
        .image-wrapper {
          width: 150px;
          height: 100px;
          overflow: hidden;
        }
        img {
          width: 180px;
          height: auto;
        }

        .info-contain {
          padding: 0 6px;
          overflow: hidden;
          height: 100%;
        }
        h2 {
          margin: 0;
          font-size: 2.5rem;
          overflow-wrap: break-word;
          font-weight: normal;
          opacity: 0.85;
        }
        p {
          margin: 0;
        }
        a {
          color: #000;
          opacity: 0.7;
        }
      `}
      </style>
    </div>
  ))
}

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
