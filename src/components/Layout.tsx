import React from 'react'
import { AppBar, Grid, Link, Paper, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import HowToPlayDialog from 'components/HowToPlayDialog'
import MemberInfoDialog from 'components/MemberInfoDialog'

const useStyles = makeStyles({
  paper: {
    padding: '16px 8px',
  },
  footer: {
    marginTop: 16,
  }
})

type Props = {}

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar variant="dense">
          <Typography variant='h6' style={{ flexGrow: 1 }}>さくら学院ポーカー</Typography>
          <MemberInfoDialog />
          <HowToPlayDialog />
        </Toolbar>
      </AppBar>
      <Grid container justify='center'>
        <Grid item xs={12} md={8} lg={6}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              {children}
            </Grid>
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
