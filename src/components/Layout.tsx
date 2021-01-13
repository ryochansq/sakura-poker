import React from 'react'
import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core'
import MuLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { FiberNew } from '@material-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

import HowToPlayDialog from 'components/HowToPlayDialog'
import MemberInfoDialog from 'components/MemberInfoDialog'

const useStyles = makeStyles({
  text: {
    textAlign: 'end',
    fontWeight: 600,
    textDecoration: 'underline',
  },
  newIcon: {
    verticalAlign: 'sub',
  },
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
  const router = useRouter()
  const isQuiz = !router.pathname.indexOf('/quiz')

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
              <Grid item xs={12} >
                <Typography className={classes.text}>
                  {
                    isQuiz ?
                      <Link href='/'>ポーカーモードで遊ぶ</Link>
                      :
                      <span>
                        <FiberNew color='secondary' className={classes.newIcon} />
                        <Link href='/quiz'>クイズモードで遊んでみる！</Link>
                      </span>
                  }
                </Typography>
              </Grid>
              {children}
            </Grid>
            <Grid container spacing={1} className={classes.footer}>
              <Grid item container justify='flex-end'>
                <Typography variant='caption'>
                  Created by{' '}
                  <MuLink href='https://twitter.com/ryochan_metal' target='_blank'>@ryochan_metal</MuLink>
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
