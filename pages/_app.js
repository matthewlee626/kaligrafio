import * as React from 'react'
import NextApp from 'next/app'

import { ThemeProvider } from 'theme-ui'
import theme from '../components/theme'

import './bootstrap.min.css'


export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}