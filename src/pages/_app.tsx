import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { members } from 'interfaces/index'
import 'styles/index.scss'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>さくら学院ポーカー</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        {members.map(member => <link rel="preload" href={`members/${member}.jpg`} as="image" key={member} />)}
        <style jsx global>{`
          body {
            margin: 0px;
          }
        `}</style>
      </Head>
      <ThemeProvider theme={createMuiTheme()}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}