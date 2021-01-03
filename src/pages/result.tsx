import React from 'react'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'
import { Member } from 'interfaces/index'
import { getCombos } from 'utils/score'

const useStyles = makeStyles(() => createStyles({
  text: {
    textAlign: 'center',
    fontWeight: 600,
  },
  field: {
    backgroundColor: '#ffe5ff',
  },
  selected: {
    border: 'solid 2px red',
    margin: -2,
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  button: {
    textTransform: 'none',
  },
  score: {
    fontSize: 24,
    fontWeight: 600,
  }
}))

const IndexPage = () => {
  const classes = useStyles()
  const router = useRouter()
  const members = router.query.member as Member[]
  const isResult = router.query.result === '1'

  const combos = !!members ? getCombos(members) : []
  const score = !!members ? combos.reduce((acc, combo) => acc + combo.score, 0) : '計算中'

  return (
    <Layout isDialogOpen={false}>
      <Grid item xs={12}>
        <Typography variant='subtitle1' className={classes.text}>結果</Typography>
      </Grid>
      <Grid item container justify='center' spacing={1} className={classes.field}>
        {!!members && members.map(member =>
          <Grid key={member} item xs={2}>
            <Card>
              <img src={`members/${member}.jpeg`} className={classes.img} />
            </Card>
          </Grid>
        )}
      </Grid>
      <Grid item container>
        <Grid item container justify='center'>
          <Grid item xs={5} sm={3}>役</Grid>
          <Grid item container xs={3} sm={1} justify='flex-end'>点数</Grid>
        </Grid>
        {combos.map(combo =>
          <Grid key={combo.name} item container justify='center'>
            <Grid item xs={5} sm={3}>{combo.name}</Grid>
            <Grid item container xs={3} sm={1} justify='flex-end'>{combo.score}</Grid>
          </Grid>
        )}
      </Grid>
      <Grid item container>
        <Grid item container justify='center'>
          <Grid item container xs={5} sm={3} alignItems='center'>あなたのスコア：</Grid>
          <Grid item container xs={3} sm={1} justify='flex-end' alignItems='center' className={classes.score}>{score}</Grid>
        </Grid>
      </Grid>
      <Grid item container justify='center'>
        {
          isResult ?
            <Button variant='contained' color='primary' className={classes.button} disabled>結果をTwitterで共有する</Button>
            :
            ''
        }
      </Grid>
    </Layout>
  )
}
export default IndexPage
