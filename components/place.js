import React from 'react'

import LazyLoad from 'react-lazyload'

const Element = ({ place }) => (
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
        margin: 20px 0 0
        background-color: #FFF
        display: flex
        padding-bottom: 12px
        align-items: center
      }

      .place .image-contain {

      }
      .place .image-wrapper {
        width: 150px
        height: 100px
        overflow: hidden
      }
      .place img {
        width: 180px
        height: auto
      }

      .place .info-contain {
        padding: 0 6px
        overflow: hidden
        height: 100%
      }
      .place h2 {
        margin: 0
        font-size: 2.5rem
        overflow-wrap: break-word
        font-weight: normal
        opacity: 0.85
      }
      .place p {
        margin: 0
      }
      .place a {
        color: #000
        opacity: 0.7
      }
    `}
    </style>
  </div>
)

export default Element
