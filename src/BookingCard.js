import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress';
import ReplayIcon from '@material-ui/icons/Replay'
import DinerBooking from './DinerBooking'
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#34A65F',
    color: 'white',
    marginRight: 10
  },
  price: {
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 15
  },
  progress: {
    margin: '5px 20px'
  }
}

class BookingCard extends React.Component {

  // Initialise state for the drop-downs
  state = {
    diner1: {
      starter: '',
      main: '',
      dessert: ''
    },
    diner2: {
      starter: '',
      main: '',
      dessert: ''
    },
    errors: [],
    totalPrice: 0,
    booked: false
  }

  // Handle dish selection per diner
  handleChange = diner => dish => event => {
    let dinerSelection = Object.assign({}, this.state['diner' + diner])
    dinerSelection[dish] = event.target.value
    this.setState({ ['diner' + diner]: dinerSelection, booked: false })
  }

  // Allow user to restart the booking process
  handleRestart = () => {
    this.setState({
      diner1: {
        starter: '',
        main: '',
        dessert: ''
      },
      diner2: {
        starter: '',
        main: '',
        dessert: ''
      },
      errors: [],
      totalPrice: 0,
      booked: false,
      loading: false
    })
  }

  // Handle user booking
  handleBooking = () => {
    let errors = this.checkBooking()

    if (errors.length === 0) {
      this.setState({ loading: true})
      // calculate total price
      let totalPrice = this.calculatePrice()
      this.setState({ totalPrice, errors })
      setTimeout(() => { this.setState({ loading: false, booked: true }) }, 1500)
    }
    else {
      this.setState({ errors })
    }
  }

  // Check the booking respects the rules
  checkBooking = () => {

    // Initialise array of diners, errors and boolean to check if the cheesecake has already been selected
    let diners = ['diner1', 'diner2']
    let errors = []
    let cheesecakeTaken = false

    // For each diner, check the selection
    for (let diner of diners) {
      let dinerSelection = Object.assign({}, this.state[diner])
      let error = {}

      // Check the selection has a main course
      if (!dinerSelection.main) {
        error = {id: diner, message: 'You must select a main course'}
        errors.push(error)
      }
      // Check the selection has at least two courses
      else if ( !(dinerSelection.starter || dinerSelection.dessert) ) {
        error = {id: diner, message: 'You must select at least two courses'}
        errors.push(error)
      }
      // Check the selection doesn't have both prawn and salmon
      else if ( dinerSelection.starter === 4 && dinerSelection.main === 7) {
        error = {id: diner, message: 'You cannot order both prawn cocktail and salmon fillet'}
        errors.push(error)
      }
      // Check the selection doesn't have a cheesecake if it's already taken
      else if ( dinerSelection.dessert === 11) {
        if (cheesecakeTaken) {
          error = {id: diner, message: "We apologize but we're out of cheesecake!"}
          errors.push(error)
        }
        else {
          cheesecakeTaken = true
        }
      }
    }
    return errors
  }

  calculatePrice = () => {
    let diners = ['diner1', 'diner2']
    let total = 0

    // Calculate the price for each diner and each course
    for (let diner of diners) {
      let dinerSelection = Object.assign({}, this.state[diner])
      for (let key of Object.keys(dinerSelection)) {
        let id = dinerSelection[key]
        // If a selection has been made for this course
        if (id) {
          let price = menuData[key + 's'].find( i => { return i.id === id})['price']
          total += price
        }
      }
    }
    return total
  }

  render () {
    const { classes } = this.props

    return (
      <Card className={ classes.container }>
        <CardContent className={ classes.content }>
          <Typography variant='h5' className={ classes.header }>Booking</Typography>
          <hr className={ classes.divider }/>
          <DinerBooking
            diner={ 1 }
            handleChange={ this.handleChange(1) }
            dinerSelection={ this.state.diner1 }
            error={ this.state.errors.find(error => {return error.id === 'diner1'}) }
          />
          <DinerBooking
            diner={ 2 }
            handleChange={ this.handleChange(2) }
            dinerSelection={ this.state.diner2 }
            error={ this.state.errors.find(error => {return error.id === 'diner2'}) }
          />
          <Typography className={ classes.price } variant='h5'>
            { 'TOTAL PRICE: ' + this.state.totalPrice + ' £' }
          </Typography>
          {this.state.loading && <LinearProgress className={ classes.progress } color='secondary'/>}
          <div className={ classes.buttonContainer }>
            <Button
              className={ classes.button }
              size='large'
              variant='contained'
              onClick={ this.handleBooking }
              disabled={ this.state.booked }
            >
              { this.state.booked ? 'Booked' : 'Book' }
            </Button>
            <IconButton aria-label='Restart' onClick={ this.handleRestart }>
              <ReplayIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(BookingCard)
