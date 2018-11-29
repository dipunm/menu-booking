import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import menuData from '../menu-data'

const styles = {
  container: {
    backgroundColor: '#CC231E'
  },
  content: {
    backgroundColor: '#fcfcfc',
    margin: 30,
    height: 600
  },
  header: {
    textAlign: 'center',
    color: '#CC231E',
    fontWeight: 500,
    marginBottom: 10
  },
  divider: {
    borderTop: '2px dashed #CC231E'
  },
  menuItem: {
    display: 'flex',
    marginBottom: 10
  },
  menuDish: {
    flexGrow: 1
  }
}

const menu = [
  { id: 'starters' , label: 'Starters'},
  { id: 'mains' , label: 'Main Courses'},
  { id: 'desserts' , label: 'Desserts'},
]

class MenuCard extends React.Component {

  render () {
    const { classes } = this.props

    return (
      <Card className={ classes.container }>
        <CardContent className={ classes.content }>
          <Typography variant='h5' className={ classes.header }>Christmas Menu</Typography>
          <hr className={ classes.divider }/>
          { menu.map( course =>
            <div key={ course.id }>
            <Typography gutterBottom variant='h6' className={ classes.header }>{ course.label }</Typography>
            { menuData[course.id].map( item =>
              <div className={ classes.menuItem } key={ item.id }>
                <Typography variant='subtitle2' className={ classes.menuDish }>{ item.name }</Typography>
                <Typography variant='subtitle2'>{ item.price + ' £'}</Typography>
              </div>
            )}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(MenuCard)
