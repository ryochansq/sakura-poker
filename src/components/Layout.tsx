import React from 'react'
import Head from 'next/head'
import { AppBar, Button, Grid, Link, Paper, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  paper: {
    padding: '16px 8px'
  },
  footer: {
    marginTop: 16,
  }
})

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'さくら学院ポーカー' }) => {
  const classes = useStyles()

  return (
    <div>
      <Head>
        <title>{title}</title>
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
          <Button color="inherit">ヒント</Button>
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
