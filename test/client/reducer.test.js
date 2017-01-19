const test = require('ava')
const reducer = require('../../src/reducer')


test('change route', t => {

  const state = {route: 'index'}

  const action = {type: 'CHANGE_ROUTE', payload: 'motivation'}

  const expectedState = {route: 'motivation'}

  const actualState = reducer(state, action)

  t.deepEqual(expectedState, actualState, 'should change routes')

})


test.only('update topics', (t) => {
  const initialState = { topics: [] }

  const action = {
    type: 'UPDATE_TOPICS',
    payload: [ "motivation", "study tips", "have a laugh" ]
  }

  const expectedState = {
    topics: [ "motivation", "study tips", "have a laugh" ]
  }

  const actualState = reducer(initialState, action)

  t.deepEqual(actualState, expectedState)
})
