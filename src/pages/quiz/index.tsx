import React from 'react'
import { Button, Card, CardMedia, Checkbox, Grid, Select, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'
import { members, Member } from 'interfaces/index'
import { getCombos } from 'utils/score'

const useStyles = makeStyles(() => createStyles({
  text: {
    textAlign: 'center',
    fontWeight: 600,
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
  media: {
    height: 0,
    paddingTop: '155%',
  },
  select: {
    fontSize: 16,
    margin: '4px 0',
  },
  checkbox: {
    padding: 0,
  },
  comboName: {
    color: '#00d',
  },
  button: {
    textTransform: 'none',
  },
  score: {
    fontSize: 20,
    fontWeight: 600,
  },
}))

const IndexPage = () => {
  let defaultDeck = [...members] as Member[]
  if (Math.random() * 100 > 20) defaultDeck.pop() // 20%の確率で森ハヤシがpopされない
  for (let i = defaultDeck.length - 1; i > 0; i--) {  // 山札をシャッフル
    let r = Math.floor(Math.random() * (i + 1))
    let tmp = defaultDeck[i]
    defaultDeck[i] = defaultDeck[r]
    defaultDeck[r] = tmp
  }
  const [hand, setHand] = React.useState<Member[]>([])
  const [isComboVisible, setIsComboVisible] = React.useState(false)
  const [selectedMembers, setSelectedMembers] = React.useState<(Member | '')[]>(['', '', '', '', ''])
  const classes = useStyles()
  const router = useRouter()

  const combos = getCombos(hand)
  const score = combos.reduce((acc, combo) => acc + combo.score, 0)

  const isDisabled = selectedMembers.some(member => !member)
  const buttonText = isDisabled ? 'メンバーを選んで下さい' : '答え合わせをする！'

  const onChangeSelect = (value: Member | '', index: number) => {
    const newSelectedMembers = selectedMembers.map((member, i) => i === index ? value : member)
    setSelectedMembers(newSelectedMembers)
  }

  const onClickOk = () => {
    router.push({
      pathname: '/quiz/result',
      query: { member: selectedMembers, answer: hand, result: '1' },
    })
  }

  React.useEffect(() => setHand(defaultDeck.slice(0, 5)), []) // created

  // シャッフル前のコンボが一瞬見えるのでそれを避けるため500ms待ってからコンボを表示
  React.useEffect(() => {
    setTimeout(() => setIsComboVisible(true), 500)
  }, [])

  return (
    <Layout>
      <Grid item xs={12}>
        <Typography variant='subtitle1' className={classes.text}>手札の5人を当ててみよう！</Typography>
      </Grid>
      <Grid item xs={12} className={classes.field}>
        {[0, 1, 2, 3, 4].map(index =>
          <div key={index} className={classes.card}>
            <Card>
              <CardMedia className={classes.media} image={selectedMembers[index] ? `/members/${selectedMembers[index]}.jpg` : '/question.jpg'} title='question' />
            </Card>
            <Select
              native
              value={selectedMembers[index]}
              onChange={event => onChangeSelect(event.target.value as (Member | ''), index)}
              className={classes.select}
            >
              <option value=''></option>
              {members.map(member => <option key={member} value={member}>{member}</option>)}
            </Select>
          </div>
        )}
      </Grid>
      <Grid item container>
        <Grid item container justify='center'>
          <Grid item container xs={1} sm={1} justify='center'>ﾒﾓ</Grid>
          <Grid item xs={8} sm={4}>役</Grid>
          <Grid item container xs={2} sm={1} justify='flex-end'>点数</Grid>
        </Grid>
        {isComboVisible && combos.map(combo =>
          <Grid key={combo.name} item container justify='center' alignItems='center'>
            <Grid item container xs={1} sm={1} justify='center'><Checkbox size='small' className={classes.checkbox} /></Grid>
            <Grid item xs={8} sm={4} className={classes.comboName}>{combo.name}</Grid>
            <Grid item container xs={2} sm={1} justify='flex-end'>{combo.score}</Grid>
          </Grid>
        )}
      </Grid>
      <Grid item container>
        <Grid item container justify='center'>
          <Grid item container xs={8} sm={4} alignItems='center'>スコア合計：</Grid>
          {isComboVisible && <Grid item container xs={2} sm={1} justify='flex-end' alignItems='center' className={classes.score}>{score}</Grid>}
        </Grid>
      </Grid>
      <Grid item container justify='center'>
        <Button onClick={onClickOk} variant='contained' color='primary' disabled={isDisabled}>{buttonText}</Button>
      </Grid>
    </Layout >
  )
}
export default IndexPage
