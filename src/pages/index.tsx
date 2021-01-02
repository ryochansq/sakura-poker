import React from 'react'
import { Button } from '@material-ui/core'

import Layout from 'components/Layout'
import { members, Member } from 'interfaces/index'

const IndexPage = () => {
  let defaultDeck = [...members] as Member[]
  if (Math.random() * 10 > 1) defaultDeck.pop() // 10%の確率で森ハヤシがpopされない
  for (let i = defaultDeck.length - 1; i > 0; i--) {  // 山札をシャッフル
    let r = Math.floor(Math.random() * (i + 1))
    let tmp = defaultDeck[i]
    defaultDeck[i] = defaultDeck[r]
    defaultDeck[r] = tmp
  }
  const [deck, setDeck] = React.useState<Member[]>(defaultDeck)
  const [hand, setHand] = React.useState<Member[]>([])

  const draw = (num: number) => {
    let newDeck = [...deck]
    let newHand = [...hand]
    for (let i = 0; i < num; i++) {
      const card = newDeck.pop()
      if (card) newHand.push(card)
    }
    setDeck(newDeck)
    setHand(newHand)
  }
  React.useEffect(() => draw(5), [])  // created
  return (
    <Layout>
      <h1>Hello Poker 👋</h1>
      <Button onClick={() => draw(1)} variant="contained">hoge</Button>
    </Layout>
  )
}
export default IndexPage
