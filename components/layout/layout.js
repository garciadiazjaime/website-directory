import React, { Component } from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga';

import MainHeader from './mainHeader'

class Layout extends Component {

  componentDidMount() {
    ReactGA.initialize('UA-75576478-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="icon" href="/static/images/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />

          <title>Restaurantes, Bares y Cafés en Playas de Tijuana</title>
          <meta name="description" content="Restaurantes, Bares y Cafés en Playas de Tijuana" />
        </Head>

        <MainHeader />

        <section className="main-content">
          {this.props.children}
        </section>

        <style jsx global>{`
          body {
            margin: 0;
          }

          .main-content {
            color: #000;
            font-family: Helvetica;
            max-width: 720px;
            margin: 0 auto;
          }

          a {
            text-decoration: none;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Layout
