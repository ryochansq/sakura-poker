import React from 'react'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Router from 'next/router'

import Layout from 'components/Layout'
import { MemberCard, members, Member } from 'interfaces/index'

const useStyles = makeStyles(() => createStyles({
  text: {
    textAlign: 'center',
    fontWeight: 600,
  },
  field: {
    backgroundColor: '#ffe5ff',
    padding: 0,
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
  const [numOfExchange, setNumOfExchange] = React.useState(3)

  const selectedCount = hand.reduce((acc, card) => card.isSelected ? acc + 1 : acc, 0)
  const buttonText = selectedCount > 0 ? `${selectedCount}枚 手放す` : 'どれも手放さない'

  const classes = useStyles()

  const draw = (currentHand: MemberCard[], num: number) => {
    let newDeck = [...deck]
    let newHand = [...currentHand]
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
  const discard = () => {
    if (selectedCount === 0) {
      setNumOfExchange(0)
      return
    }
    const newHand = hand.filter((card) => !card.isSelected)
    setHand(newHand)
    draw(newHand, 5 - newHand.length)
    setNumOfExchange(numOfExchange - 1)
  }

  React.useEffect(() => draw([], 5), [])  // created
  if (!numOfExchange) setTimeout(() => Router.push({
    pathname: '/result',
    query: { member: hand.map((card) => card.member), result: '1' },
  }), 500)

  return (
    <Layout isDialogOpen={false}>
      <Grid item xs={12}>
        <Typography variant='subtitle1' className={classes.text}>手放すカードを選んで下さい　　あと {numOfExchange} 回</Typography>
      </Grid>
      <Grid item container spacing={1} className={classes.field}>
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
        <Button onClick={discard} variant='contained' color={selectedCount > 0 ? 'primary' : 'default'} disabled={!numOfExchange}>{buttonText}</Button>
      </Grid>
    </Layout >
  )
}
export default IndexPage
