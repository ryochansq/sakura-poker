import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles({
//   paper: {
//     padding: '16px 8px'
//   },
//   footer: {
//     marginTop: 16,
//   }
// })

type Props = {
  defaultState?: boolean
}

const HowToPlayDialog: React.FC<Props> = ({ defaultState = false }) => {
  // const classes = useStyles()
  const [isOpen, setIsOpen] = React.useState(defaultState)

  const handleClose = () => setIsOpen(false)
  return (
    <div>
      <Button onClick={() => setIsOpen(true)} color="inherit">遊び方</Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>遊び方</DialogTitle>
        <DialogContent dividers>
          <p>0. ひとりで遊ぶポーカーです。</p>
          <p>1. カードが5枚配られるので、</p>
          <p>2. 手放すカードを0~5枚選ぶと、</p>
          <p>3. 手放した枚数分カードを引けます。</p>
          <p>4. 2~3を最大3回まで繰り返します。</p>
          <p>5. 手札の組み合わせで点が付きます。</p>
          <p>※ 部活動や生徒会役職、学年などを揃えてみましょう。</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default HowToPlayDialog
