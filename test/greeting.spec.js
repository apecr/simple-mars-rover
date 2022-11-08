const {getRover} = require('../app/index')
const { useCases } = require('./fixtures')

describe('The mars rover kata', () => {
  let rover
  beforeEach(() => {
    rover = getRover()
  })
  it('Should exist', () => {
    expect(rover).toBeDefined()
  })
  it('Should get initial position', () => {
    expect(rover.getPosition()).toBe('0:0:N')
  })  
  it('Should move one step forward', () => {
    rover.move('M')

    expect(rover.getPosition()).toBe('0:1:N')
  })
  it('Should move two steps forward', () => {
    rover.move('MM')

    expect(rover.getPosition()).toBe('0:2:N')
  })
  it('Should move three steps forward', () => {
    rover.move('MMM')

    expect(rover.getPosition()).toBe('0:3:N')
  })
  it('Should move nine steps forward', () => {
    rover.move('MMMMMMMMM')

    expect(rover.getPosition()).toBe('0:9:N')
  })
  it('Should move ten steps forward and go back to the begining', () => {
    rover.move('MMMMMMMMMM')

    expect(rover.getPosition()).toBe('0:0:N')
  })
  it('Should rotate left the rover', () => {
    rover.move('L')

    expect(rover.getPosition()).toBe('0:0:W')
  })
  it('Should rotate right the rover', () => {
    rover.move('R')

    expect(rover.getPosition()).toBe('0:0:E')
  })
  useCases.forEach(useCase => {
    it(useCase.name, () => {
      rover.move(useCase.move)

    expect(rover.getPosition()).toBe(useCase.position)
    })
  })
})


