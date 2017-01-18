const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore} = require('redux')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default
const reducer = require('./reducer')


// components
const Parent = require('./components/app')

const App = ({state, store}) => {
  return (
    <MuiThemeProvider>
      <Parent state={state} store={store} />
    </MuiThemeProvider>
  )
}

const initialState = {
  route: 'index',
  appName: 'āwhina',
  welcome: 'Haere mai ki āwhina | Welcome to āwhina.',
  description: 'This is a resource for anyone who needs a bit of support or help.',
  choose: 'He aha tō hiahia i tenei wā? | What do you need today?',
  topic: 'random media'
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
      <App store={store} state={state} />,
      root
    )
  }

  store.dispatch({type: 'GO!'})

})
