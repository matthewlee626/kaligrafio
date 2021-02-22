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
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}