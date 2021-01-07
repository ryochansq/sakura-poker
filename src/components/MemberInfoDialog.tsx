import React from 'react'
import { Button, Card, CardMedia, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { memberInfo } from 'interfaces/memberInfo'

const useStyles = makeStyles({
  card: {
    width: 'calc(100% + 24px)',
    margin: '0 -12px',
    padding: 4,
    backgroundColor: '#ffeeff',
  },
  media: {
    height: 0,
    paddingTop: '126.8%',
    backgroundPosition: '0 0',
  },
  kana: {
    lineHeight: 1,
    transform: 'translateY(-20px) !important',
  },
})

type Props = {
  defaultState?: boolean
}

const MemberInfoDialog: React.FC<Props> = ({ defaultState = false }) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = React.useState(defaultState)
  const studentsInfo = memberInfo.filter((info) => info.name !== '森 ハヤシ')

  const handleClose = () => setIsOpen(false)
  return (
    <div>
      <Button onClick={() => setIsOpen(true)} color="inherit">生徒情報</Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>生徒情報</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={1}>
            {
              studentsInfo.map(student =>
                <Grid item container key={student.name}>
                  <Card className={classes.card}>
                    <Grid container direction='row' justify='center' spacing={1}>
                      <Grid item xs={3}>
                        <Card><CardMedia className={classes.media} image={`members/${student.name}.jpg`} title={student.name} /></Card>
                      </Grid>
                      <Grid item xs={9}>
                        <Typography variant="body1">{student.name}</Typography>
                        <Typography variant="caption" className={classes.kana}>{student.kana}</Typography>
                        <Typography variant="body2">生年月日：{student.birthDay}</Typography>
                        <Typography variant="body2">在籍年度：{student.transfer === '初期メンバー' ? 2010 : student.transfer}~{student.graduate > 2020 ? 2020 : student.graduate}</Typography>
                        <Typography variant="body2">生徒会：{student.positions.join(', ') || '-'}</Typography>
                        <Typography variant="body2">部活動：{student.clubs.join(', ') || '-'}</Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              )
            }
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">閉じる</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MemberInfoDialog
