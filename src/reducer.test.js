const test = require('tape')
const reducer = require('./reducer')


test('change route', t => {

  const state = {route: 'index'}

  const action = {type: 'CHANGE_ROUTE', payload: 'motivation'}

  const expectedState = {route: 'motivation'}

  const actualState = reducer(state, action)

  t.deepEqual(expectedState, actualState, 'should change routes')
  t.end()

})
