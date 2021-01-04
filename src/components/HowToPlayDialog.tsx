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
        <DialogContent>
          ひとりで遊ぶポーカーです
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default HowToPlayDialog
