//logging
const debug = require('debug')('index')
localStorage.debug = '*'

//modules
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore} = require('redux')
const MuiThemeProvider = require('material-ui/styles/')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

//top level components
const App = require('./components/app')
const Home = require('./components/home')
const Display = require('./components/display')

const store = createStore(reducer, initialState)

const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store} >
        <Router history={hashHistory} >
          <Route path="/" component={App} store={store}>
            <IndexRoute component={Shop} />
            <Route path="checkout" component={Checkout} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root =
  document.querySelector('#app')
    ReactDOM.render(
      <Root store={store} />,
      root
    )
})
