import Enzyme, { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import { createShallow } from '@material-ui/core/test-utils'
import MenuCard from '../src/MenuCard'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

configure({ adapter: new Adapter() })

describe('MenuCard', () => {
  let mountedComponent

  beforeEach(() => {
    let options = { dive: true }
    let shallow = createShallow(options)
    mountedComponent = shallow(<MenuCard />)
  })

  it('should contain one single Card', () => {
    let cards = mountedComponent.find(Card)
    expect(cards).toHaveLength(1)
  })

  it('should have a Christmas Menu title', () => {
    let title = mountedComponent.find(Typography).at(0)
    expect(title.render().text()).toBe('Christmas Menu')
  })

  // 1 h5, 1 h6, and 2 subtitle2
  it('should hqve at least 4 Typograhies', () => {
    let typographies = mountedComponent.find(Typography)
    expect(typographies.length).toBeGreaterThan(4)
  })

})
