const React = require('react')
const _ = require('lodash')

//components
//such as header or main or topics etc
const Topics = require('./topics')

module.exports = function App (props) {
  console.log("State", state)

  const { store, state } = props

  console.log("This is store", store)

  return (
    <div className="choose">
      <h1>awhina</h1>
      <h3>Welcome</h3>
      <h4>App for help and support</h4>
      <p>Choose from the topics</p>
    </div>
  )

}
