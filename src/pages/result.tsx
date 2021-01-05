import React from 'react'
import { Button, Card, CardMedia, Grid, Tooltip, Typography, Zoom } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'
import { Member } from 'interfaces/index'
import { getCombos, Combo } from 'utils/score'

const useStyles = makeStyles(() => createStyles({
  text: {
    textAlign: 'center',
    fontWeight: 600,
  },
  field: {
    backgroundColor: '#ffe5ff',
  },
  focused: {
    border: 'solid 3px #00f',
    margin: -3,
  },
  media: {
    height: 0,
    paddingTop: '155%',
  },
  comboName: {
    cursor: 'pointer',
    color: '#00d',
    textDecoration: 'underline',
    userSelect: 'none',
  },
  button: {
    textTransform: 'none',
  },
  score: {
    fontSize: 26,
    fontWeight: 600,
  },
  tweet: {
    textTransform: 'none',
    backgroundColor: '#1DA1F2',
    fontWeight: 600,
  },
}))

const IndexPage = () => {
  const [focusedCombo, setFocusedCombo] = React.useState<Combo | null>(null)
  const classes = useStyles()
  const router = useRouter()
  const members = router.query.member as Member[]
  const isResult = router.query.result === '1'

  const combos = !!members ? getCombos(members) : []
  const score = !!members ? combos.reduce((acc, combo) => acc + combo.score, 0) : '???'

  const onClickCombo = (combo: Combo) => !!focusedCombo && focusedCombo.name === combo.name ? setFocusedCombo(null) : setFocusedCombo(combo)

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
            <Card className={!!focusedCombo && focusedCombo.members.some(focused => focused.name === member) ? classes.focused : ''}>
              <CardMedia className={classes.media} image={`members/${member}.jpg`} title={member} />
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
            <Tooltip
              arrow
              open={!!focusedCombo && focusedCombo.name === combo.name}
              onOpen={() => setFocusedCombo(combo)}
              onClose={() => setFocusedCombo(null)}
              placement='top-start'
              title={combo.description}
              TransitionComponent={Zoom}
            >
              <Grid onClick={() => onClickCombo(combo)} item xs={8} sm={4} className={classes.comboName}>{combo.name}</Grid>
            </Tooltip>
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
          <Button onClick={() => router.push(`/${isResult ? '' : '?first=1'}`)} variant='contained' color='primary' className={classes.button}>{isResult ? 'もういちど遊ぶ' : '自分も遊んでみる！'}</Button>
        </Grid>
        <Grid item>
          {isResult && <Button onClick={tweet} variant='contained' color='primary' className={classes.tweet} startIcon={<Twitter />} disabled>結果をTweet</Button>}
        </Grid>
      </Grid>
    </Layout>
  )
}
export default IndexPage
