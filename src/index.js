const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore} = require('redux')

const reducer = require('./reducer')


// components
const App = require('./components/app')
const Topics = require('./components/topics')

const initialState = {
  appName: 'āwhina',
  welcome: 'Haere mai ki āwhina | Welcome to āwhina.',
  description: 'This is a resource for anyone who needs a bit of support or help.',
  choose: 'He aha tō hiahia i tenei wā? | What do you need today?',
  topics: ['Motivation', 'Study Tips', 'A laugh']
}

const store = createStore(reducer, initialState)

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe(() => {
    const state = store.getState()
    render(state)
  })


  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store} />, root
    )
  }

  render(store.getState())

})
