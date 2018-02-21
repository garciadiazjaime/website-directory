import React from 'react'

const MainHeader = () => (
  <div>
    <header>
      <h1>Qué se te antoja?</h1>
    </header>
    <style jsx global>{`
      header {
        background-color: #b91e1e;
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
