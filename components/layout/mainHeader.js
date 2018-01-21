import React from 'react'

const MainHeader = () => (
  <div>
    <header>
      <h1>Si he de comer, en Playas será.</h1>
    </header>
    <style jsx global>{`
      header {
        background-color: #012a33;
      }
      h1 {
        margin: 0 auto;
        padding: 15px 6px;
        color: #FFF;
        font-size: 1.8em;
        font-weight: normal;
        max-width: 720px;
      }
    `}
    </style>
  </div>
)

export default MainHeader
