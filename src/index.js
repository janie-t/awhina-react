const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')

// components
const App = require('./components/app')

const Store = require('./store')

const model = {
  appName: 'āwhina',
  welcome: 'Haere mai ki āwhina | Welcome to āwhina.',
  description: 'This is a resource for anyone who needs a bit of support or help.',
  choose: 'He aha tō hiahia i tenei wā? | What do you need today?'
}
const store = Store(model)

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe((m) => {
    console.log('model:', m)

    render(store, m)
  })

  render(store, model)


  function render (store, model) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App store={store} model={model} />, root
    )
  }



  //store.fetchCats()


})
