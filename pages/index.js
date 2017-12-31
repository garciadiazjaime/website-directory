import LazyLoad from 'react-lazyload';

import Layout from '../components/layout/layout'
import { getPlaces } from '../services/places'

const renderPlace = (places) => {
  return places.map(place => (
    <div key={place.placeId} className="place">
      {
        place.google.photos.length ? 
          <LazyLoad height={200} once>
            <img src={place.google.photos[0]} title={place.google.name} />
          </LazyLoad> : null
      }
      <div className="content">
        <h2>{place.google.name}</h2>
        {
          place.google.international_phone_number ?
          <p><a href={`tel:${place.google.international_phone_number}`}>{place.google.international_phone_number}</a></p> : null
        }
        {
          place.google.url ?
          <p><a href={place.google.url} target="_blank">ver en google maps</a></p> : null
        }
      </div>
      <style jsx global>{`
        .place {
          margin: 20px 0 0;
          padding: 2px 0 10px;
          background-color: #FFF;
        }
        .content {
          padding: 0 5px;
        }
        img {
          width: 100%;
          height: auto;
        }
        p {
          margin: 0;
        }
        a {
          color: #000;
          opacity: 0.7;
        }
        h2 {
          margin: 5px 0;
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
