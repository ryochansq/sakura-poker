import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as Sentry from '@sentry/react'

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

  Sentry.init({ dsn: "https://cc4b41c56c834e65b3cf10b7572c2fef@o501344.ingest.sentry.io/5582368" })

  return (
    <React.Fragment>
      <Head>
        <title>さくら学院ポーカー</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="favicon.png" type="image/png" />
        {members.map(member => <link rel="preload" href={`/members/${member}.jpg`} as="image" key={member} />)}
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