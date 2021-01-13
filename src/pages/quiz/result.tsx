import React from 'react'
import { Button, Card, CardMedia, Grid, Tooltip, Typography, Zoom } from '@material-ui/core'
import { Twitter } from '@material-ui/icons'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'
import { Member } from 'interfaces/index'
import { getCombos, Combo } from 'utils/score'
import AnswerDialog from '@App/components/AnswerDialog'

const useStyles = makeStyles(() => createStyles({
  correct: {
    textAlign: 'center',
    fontWeight: 600,
    color: 'red',
  },
  inCorrect: {
    textAlign: 'center',
    fontWeight: 600,
    color: 'blue',
  },
  field: {
    backgroundColor: '#ffe5ff',
    justifyContent: 'center',
    display: 'flex',
  },
  card: {
    width: '20%',
    padding: 4,
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
  overComboName: {
    cursor: 'pointer',
    color: '#d00',
    textDecoration: 'underline',
    userSelect: 'none',
  },
  underComboName: {
    color: '#777',
  },
  button: {
    textTransform: 'none',
  },
  score: {
    fontSize: 20,
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
  const answers = router.query.answer as Member[]
  const isResult = router.query.result === '1'

  const combos = !!members ? getCombos(members) : []
  const answerCombos = !!answers ? getCombos(answers) : []
  const andCombos = combos.filter(combo => answerCombos.some(answerCombo => combo.name === answerCombo.name))
  const overCombos = combos.filter(combo => !answerCombos.some(answerCombo => combo.name === answerCombo.name))
  const underCombos = answerCombos.filter(answerCombo => !combos.some(combo => combo.name === answerCombo.name))
  const isCorrect = overCombos.length === 0 && underCombos.length === 0

  const score = !!members ? combos.reduce((acc, combo) => acc + combo.score, 0) : '???'

  const onClickCombo = (combo: Combo) => !!focusedCombo && focusedCombo.name === combo.name ? setFocusedCombo(null) : setFocusedCombo(combo)

  React.useEffect(() => {
    // TODO: Sentryに代わるロギングサービスにログ送信する
    setTimeout(() => {
      if (window.location.host === 'localhost:3000') return
      if (!isResult) return
      // const message = `${score},${members.join(',')}`
      // Sentry.captureMessage(message)
    }, 3000)
  }, [])

  // TODO: tweet内容を変える
  const tweet = () => {
    const url = members.reduce((acc, member, index) => acc + `${index === 0 ? '?' : '&'}member=${encodeURIComponent(member)}`, 'https://sakura-poker.ryochansq.vercel.app/quiz/result')
    const query = '&answer=' + answers.map(answer => encodeURIComponent(answer)).join('&answer=')
    const text = `さくら学院ポーカークイズで ${isCorrect ? '正解 しました！' : '不正解 でした...'}\n\n▼結果詳細\n${url + query}\n\n#さくら学院 #さくら学院ポーカー\n#さくら学院父兄パソコン部`
    const encodedText = encodeURIComponent(text)
    const intent = `https://twitter.com/intent/tweet?text=${encodedText}`
    window.open(intent)
  }

  return (
    <Layout>
      <Grid item xs={12}>
        <div style={{ position: 'relative' }}>
          <AnswerDialog members={answers} combos={answerCombos} />
          {!!members && isCorrect && <Typography variant='h6' className={classes.correct}>正解！！</Typography>}
          {!!members && !isCorrect && <Typography variant='h6' className={classes.inCorrect}>不正解...</Typography>}
        </div>
      </Grid>
      <Grid item xs={12} className={classes.field}>
        {!!members && members.map((member, index) =>
          <div key={index} className={classes.card}>
            <Card className={!!focusedCombo && focusedCombo.members.some(focused => focused.name === member) ? classes.focused : ''}>
              <CardMedia className={classes.media} image={`/members/${member}.jpg`} title={member} />
            </Card>
          </div>
        )}
      </Grid>
      <Grid item container>
        <Grid item container justify='center'>
          <Grid item xs={8} sm={4}>役</Grid>
          <Grid item container xs={2} sm={1} justify='flex-end'>点数</Grid>
        </Grid>
        {andCombos.map(combo =>
          <Grid key={combo.name} item container justify='center'>
            <Tooltip
              arrow
              disableHoverListener
              disableTouchListener
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
      {overCombos.length > 0 &&
        <Grid item container>
          <Grid item container justify='center'>
            <Grid item xs={8} sm={4}>多かった役</Grid>
            <Grid item container xs={2} sm={1} justify='flex-end'></Grid>
          </Grid>
          {overCombos.map(combo =>
            <Grid key={combo.name} item container justify='center'>
              <Tooltip
                arrow
                disableHoverListener
                disableTouchListener
                open={!!focusedCombo && focusedCombo.name === combo.name}
                onOpen={() => setFocusedCombo(combo)}
                onClose={() => setFocusedCombo(null)}
                placement='top-start'
                title={combo.description}
                TransitionComponent={Zoom}
              >
                <Grid onClick={() => onClickCombo(combo)} item xs={8} sm={4} className={classes.overComboName}>{combo.name}</Grid>
              </Tooltip>
              <Grid item container xs={2} sm={1} justify='flex-end'>{combo.score}</Grid>
            </Grid>
          )}
        </Grid>
      }
      {underCombos.length > 0 &&
        <Grid item container>
          <Grid item container justify='center'>
            <Grid item xs={8} sm={4}>足りなかった役</Grid>
            <Grid item container xs={2} sm={1} justify='flex-end'></Grid>
          </Grid>
          {underCombos.map(combo =>
            <Grid key={combo.name} item container justify='center'>
              <Grid item xs={8} sm={4} className={classes.underComboName}>{combo.name}</Grid>
              <Grid item container xs={2} sm={1} justify='flex-end'></Grid>
            </Grid>
          )}
        </Grid>
      }
      <Grid item container>
        <Grid item container justify='center'>
          <Grid item container xs={8} sm={4} alignItems='center'>スコア合計：</Grid>
          <Grid item container xs={2} sm={1} justify='flex-end' alignItems='center' className={classes.score}>{score}</Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' justify='center' spacing={2}>
        <Grid item>
          <Button onClick={() => router.push('/quiz')} variant='contained' color='primary' className={classes.button}>{isResult ? 'もういちど遊ぶ' : '自分も問題を解いてみる！'}</Button>
        </Grid>
        <Grid item>
          {isResult && <Button onClick={tweet} variant='contained' color='primary' className={classes.tweet} startIcon={<Twitter />}>結果をTweet</Button>}
        </Grid>
      </Grid>
    </Layout>
  )
}
export default IndexPage
