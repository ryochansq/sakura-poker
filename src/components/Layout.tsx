import React from 'react'
import Head from 'next/head'
import { AppBar, Grid, Link, Paper, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HowToPlayDialog from 'components/HowToPlayDialog'

const useStyles = makeStyles({
  paper: {
    padding: '16px 8px'
  },
  footer: {
    marginTop: 16,
  }
})

type Props = {
  isDialogOpen?: boolean
}

const Layout: React.FC<Props> = ({ children, isDialogOpen = false }) => {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <title>さくら学院ポーカー</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <style jsx global>{`
      body {
        margin: 0px;
      }
    `}</style>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' style={{ flexGrow: 1 }}>さくら学院ポーカー</Typography>
          <HowToPlayDialog defaultState={isDialogOpen} />
        </Toolbar>
      </AppBar>
      <Grid container justify='center'>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            {children}
            <Grid container spacing={1} className={classes.footer}>
              <Grid item container justify='flex-end'>
                <Typography variant='caption'>
                  Created by{' '}
                  <Link href='https://twitter.com/ryochan_metal' target='_blank'>@ryochan_metal</Link>
                </Typography>
              </Grid>
              <Grid item container justify='flex-end'>
                <Typography variant='caption'>推奨ブラウザ：Chrome, Safari</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout
