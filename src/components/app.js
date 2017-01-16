const React = require('react')
const Topics = require('./topics')


module.exports = function App (props) {
  console.log('props', props)
  const { store, model} = props
  // var store = props.store
  // var model = props.model
  const topic = "Motivation"
  return (
    <div>
      <h1>{model.appName}</h1>
      <h3>{model.welcome}</h3>
      <h4>{model.description}</h4>
      <p>{model.topics}</p>
      <Topics topic={topic} />
    </div>

  )
}
