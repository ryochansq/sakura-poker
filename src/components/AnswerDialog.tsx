import React from 'react'
import { Button, Card, CardMedia, Dialog, DialogTitle, DialogActions, Grid, IconButton, Paper, Slide, Tooltip, Typography, Zoom } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { TransitionProps } from '@material-ui/core/transitions'
import { Close } from '@material-ui/icons'

import { Member } from 'interfaces/index'
import { Combo } from 'utils/score'

const useStyles = makeStyles(() => createStyles({
  button: {
    position: 'absolute',
    right: 4,
  },
  paper: {
    padding: '16px 8px',
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
  score: {
    fontSize: 20,
    fontWeight: 600,
  },
}))

type Props = {
  members: Member[],
  combos: Combo[]
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const AnswerDialog: React.FC<Props> = ({ members, combos }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [focusedCombo, setFocusedCombo] = React.useState<Combo | null>(null)
  const classes = useStyles()

  const score = combos.reduce((acc, combo) => acc + combo.score, 0)
  const handleClose = () => setIsOpen(false)
  const onClickCombo = (combo: Combo) => !!focusedCombo && focusedCombo.name === combo.name ? setFocusedCombo(null) : setFocusedCombo(combo)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} variant='contained' color='secondary' className={classes.button}>解答例</Button>
      <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
        <DialogTitle>
          <Grid container justify='center' style={{ marginTop: 76 }}>
            <Grid item container xs={12} md={8} lg={6} justify='space-between' alignItems='center'>
              <Grid>
                <Typography variant="h6">解答例</Typography>
              </Grid>
              <Grid>
                <IconButton color="inherit" onClick={handleClose}>
                  <Close />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </DialogTitle>
        <Grid container justify='center'>
          <Grid item xs={12} md={8} lg={6}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.field}>
                  {!!members && members.map(member =>
                    <div key={member} className={classes.card}>
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
                  {!!combos && combos.map(combo =>
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
                <Grid item container>
                  <Grid item container justify='center'>
                    <Grid item container xs={8} sm={4} alignItems='center'>スコア合計：</Grid>
                    <Grid item container xs={2} sm={1} justify='flex-end' alignItems='center' className={classes.score}>{score}</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <DialogActions>
          <Grid container justify='center'>
            <Grid item container xs={12} md={8} lg={6} justify='flex-end'>
              <Grid item>
                <Button onClick={handleClose} variant='contained' color="primary">OK</Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AnswerDialog
