import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import menuData from '../menu-data'

const styles = {
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: '#34a65f2b',
    height: 160
  },
  dish: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5
  },
  menu: {
    width: 200,
  },
  textField: {
    width: 200,
  },
}

const menu = [
  { id: 'starter' , label: 'Starters'},
  { id: 'main' , label: 'Main Courses'},
  { id: 'dessert' , label: 'Desserts'},
]

class DinerBooking extends React.Component {

  render () {
    const { classes, diner, handleChange, dinerSelection, error } = this.props

    return (
      <div className={ classes.container }>
        <Typography gutterBottom variant='subtitle2'>{ 'Diner ' + diner }</Typography>
        { menu.map( course =>
          <div key={ course.id } className={ classes.dish }>
            <Typography style={{ flexGrow: 1 }}>{ course.label }</Typography>
            <TextField
              select
              value={ dinerSelection[course.id] }
              className={ classes.textField }
              onChange={ handleChange(course.id) }
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
            >
              {menuData[course.id + 's'].map(option => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
            </TextField>
          </div>
        )}
        <Typography color='error'>{error ? error.message : ''}</Typography>
      </div>
    )
  }
}

export default withStyles(styles)(DinerBooking)
