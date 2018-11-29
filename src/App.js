import React from 'react'
import { render } from 'react-dom'
import Grid from '@material-ui/core/Grid'
import MenuCard from './MenuCard'
import BookingCard from './BookingCard'

class App extends React.Component {
    render() {
        return (
          <Grid container spacing={ 24 } justify={ 'center' }>
            <Grid item xs={ 12 } sm={ 8 } md={ 6 } lg={ 4 } >
              <MenuCard />
            </Grid>
            <Grid item xs={ 12 } sm={ 8 } md={ 6 } lg={ 4 } >
              <BookingCard />
            </Grid>
          </Grid>
        )
    }
}

render(<App />, document.getElementById('root'));
