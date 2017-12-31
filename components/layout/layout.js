import Head from 'next/head'

import MainHeader from './mainHeader'

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Restaurantes, Bares y Cafés en Playas de Tijuana</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Restaurantes, Bares y Cafés en Playas de Tijuana" />
    </Head>

    <MainHeader />

    {children}

    <style jsx global>{`
      body {
        background-color: #f5f6f6;
        color: #000;
        font-size: 26px;
        margin: 0;
        font-family: Helvetica;
      }

      a {
        text-decoration: none;
      }
    `}
    </style>
  </div>
)

export default Layout
