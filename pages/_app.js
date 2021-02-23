import * as React from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'theme-ui'
import theme from '../components/theme'

import './bootstrap.min.css'


export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
     
      <ThemeProvider theme={theme}> 
        <Head>
          <title>Kaligrafio</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}