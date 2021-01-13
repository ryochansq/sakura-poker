import React from 'react'
import { Button, Card, CardMedia, Grid, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Layout from 'components/Layout'
import { MemberCard, members, Member } from 'interfaces/index'

const useStyles = makeStyles(() => createStyles({
  text: {
    textAlign: 'center',
    fontWeight: 600,
  },
  field: {
    backgroundColor: '#ffe5ff',
    justifyContent: 'center',
  },
  hand: {
    padding: 4,
  },
  trGroup: {
    width: '100%',
    display: 'flex',
  },
  cssTr: {
    width: '20%',
    padding: 4,
  },
  selected: {
    border: 'solid 3px red',
    margin: -3,
  },
  media: {
    height: 0,
    paddingTop: '155%',
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
  const [isDisabled, setIsDisabled] = React.useState(false)

  const selectedCount = hand.reduce((acc, card) => card.isSelected ? acc + 1 : acc, 0)
  const buttonText = (() => {
    if (numOfExchange === 0) return 'スコア計算中'
    return selectedCount > 0 ? `${selectedCount}枚 手放す` : '誰も手放さない'
  })()

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
    if (numOfExchange === 0) return
    const newHand = hand.map((card) => {
      const isSelected = card.member === member ? !card.isSelected : card.isSelected
      return { member: card.member, isSelected }
    })
    setHand(newHand)
  }
  const discard = async () => {
    setIsDisabled(true)
    if (selectedCount === 0) {
      setNumOfExchange(0)
      return
    }
    const newHand = hand.filter((card) => !card.isSelected)
    setHand(newHand)
    await new Promise<void>(res => setTimeout(() => res(), 350))
    draw(newHand, 5 - newHand.length)
    setNumOfExchange(numOfExchange - 1)
    setIsDisabled(false)
  }

  const router = useRouter()
  React.useEffect(() => draw([], 5), [])  // created
  if (!numOfExchange) setTimeout(() => router.push({
    pathname: '/result',
    query: { member: hand.map((card) => card.member), result: '1' },
  }), 500)

  return (
    <Layout>
      <Grid item xs={12}>
        <Typography variant='subtitle1' className={classes.text}>手放すカードを選んで下さい　　あと {numOfExchange} 回</Typography>
      </Grid>
      <Grid item xs={12} className={classes.field}>
        <TransitionGroup className={classes.trGroup}>
          {hand.map(card =>
            <CSSTransition key={card.member} timeout={300} classNames='card' className={classes.cssTr}>
              <div className={classes.trGroup}>
                <Card onClick={() => select(card.member)} className={card.isSelected ? classes.selected : ''}>
                  <CardMedia className={classes.media} image={`/members/${card.member}.jpg`} title={card.member} />
                </Card>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </Grid>
      <Grid item container justify='center'>
        <Button onClick={discard} variant='contained' color={selectedCount > 0 ? 'primary' : 'default'} disabled={!numOfExchange || isDisabled}>{buttonText}</Button>
      </Grid>
    </Layout >
  )
}
export default IndexPage
