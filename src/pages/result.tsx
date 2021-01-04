import React from 'react'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
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
  tweet: {
    textTransform: 'none',
    backgroundColor: '#1DA1F2',
    fontWeight: 600,
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
  const score = !!members ? combos.reduce((acc, combo) => acc + combo.score, 0) : '???'

  const tweet = () => {
    const text = `さくら学院ポーカーで ${score}点 を取りました！\n#さくら学院 #さくら学院ポーカー\n\nhttps://sakura-poker.ryochansq.vercel.app/result`
    const url = members.reduce((acc, member, index) => acc + `${index === 0 ? '?' : '&'}member=${encodeURIComponent(member)}`, '')
    const encodedText = encodeURIComponent(text + url)
    const intent = `https://twitter.com/intent/tweet?text=${encodedText}`
    window.open(intent)
  }

  return (
    <Layout isDialogOpen={false}>
      <Grid item xs={12}>
        <Typography variant='subtitle1' className={classes.text}>結果</Typography>
      </Grid>
      <Grid item container justify='center' spacing={1} className={classes.field}>
        {!!members && members.map(member =>
          <Grid key={member} item xs={2}>
            <Card>
              <img src={`members/${member}.jpg`} className={classes.img} />
            </Card>
          </Grid>
        )}
      </Grid>
      <Grid item container>
        <Grid item container justify='center'>
          <Grid item xs={8} sm={4}>役</Grid>
          <Grid item container xs={2} sm={1} justify='flex-end'>点数</Grid>
        </Grid>
        {combos.map(combo =>
          <Grid key={combo.name} item container justify='center'>
            <Grid item xs={8} sm={4}>{combo.name}</Grid>
            <Grid item container xs={2} sm={1} justify='flex-end'>{combo.score}</Grid>
          </Grid>
        )}
      </Grid>
      <Grid item container>
        <Grid item container justify='center'>
          <Grid item container xs={8} sm={4} alignItems='center'>今回のスコア：</Grid>
          <Grid item container xs={2} sm={1} justify='flex-end' alignItems='center' className={classes.score}>{score}</Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' justify='center' spacing={2}>
        <Grid item>
          <Button onClick={() => router.push('/')} variant='contained' color='primary' className={classes.button}>{isResult ? 'もういちど遊ぶ' : '自分も遊んでみる'}</Button>
        </Grid>
        <Grid item>
          {isResult && <Button onClick={tweet} variant='contained' color='primary' className={classes.tweet} startIcon={<Twitter />}>結果をTweet</Button>}
        </Grid>
      </Grid>
    </Layout>
  )
}
export default IndexPage
