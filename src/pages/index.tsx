import React from 'react'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import Layout from 'components/Layout'
import { MemberCard, members, Member } from 'interfaces/index'

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
  const [deck, setDeck] = React.useState<Member[]>(defaultDeck)
  const [hand, setHand] = React.useState<MemberCard[]>([])
  const classes = useStyles()

  const draw = (num: number) => {
    let newDeck = [...deck]
    let newHand = [...hand]
    for (let i = 0; i < num; i++) {
      const member = newDeck.pop()
      if (member) newHand.push({ member, isSelected: false })
    }
    setDeck(newDeck)
    setHand(newHand)
  }
  const select = (member: Member) => {
    const newHand = hand.map((card) => {
      const isSelected = card.member === member ? !card.isSelected : card.isSelected
      return { member: card.member, isSelected }
    })
    setHand(newHand)
  }
  const selectedCount = hand.reduce((acc, card) => card.isSelected ? acc + 1 : acc, 0)
  const buttonText = selectedCount > 0 ? `${selectedCount}枚 手放す` : 'どれも手放さない'

  React.useEffect(() => draw(5), [])  // created

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant='subtitle1' className={classes.text}>手放すカードを選んで下さい</Typography>
        </Grid>
        <Grid item container justify="center" spacing={1} className={classes.field}>
          <Grid item container xs={1} alignItems='center'>手札</Grid>
          {hand.map(card =>
            <Grid key={card.member} item xs={2}>
              <Card onClick={() => select(card.member)} className={card.isSelected ? classes.selected : ''}>
                <img src={`members/${card.member}.jpeg`} className={classes.img} />
              </Card>
            </Grid>
          )}
        </Grid>
        <Grid item container justify='center'>
          <Button variant='contained' color={selectedCount > 0 ? 'primary' : 'default'}>{buttonText}</Button>
        </Grid>
      </Grid>
    </Layout>
  )
}
export default IndexPage
