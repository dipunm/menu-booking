import Enzyme, { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import DinerBooking from '../src/DinerBooking'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/BUtton'

configure({ adapter: new Adapter() })

describe('DinerBooking', () => {
  let mountedComponent

  beforeEach(() => {
    let options = { dive: true }
    let shallow = createShallow(options)
    let dinerSelection = {
      'diner1': {
        'main': '',
        'starter': '',
        'dessert': ''
      }
    }
    mountedComponent = shallow(<DinerBooking diner={1} dinerSelection/>)
  })

  it('should contain 3 TextFields', () => {
    let fields = mountedComponent.find(TextField)
    expect(fields).toHaveLength(3)
  })

})
