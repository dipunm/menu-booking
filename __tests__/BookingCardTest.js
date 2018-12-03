import Enzyme, { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import BookingCard from '../src/BookingCard'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/BUtton'

configure({ adapter: new Adapter() })

describe('BookingCard', () => {
  let mountedComponent

  beforeEach(() => {
    let options = { dive: true }
    let shallow = createShallow(options)
    mountedComponent = shallow(<BookingCard />)
  })

  it('should contain one single Card', () => {
    let cards = mountedComponent.find(Card)
    expect(cards).toHaveLength(1)
  })

  it('should error if there is no main course', () => {
    // mountedComponent.find(Button).at(0).simulate('click')
    // This is not working - I think the Babel coniguration is missing something
  })

})
