const React = require('react')
const ReactDOM = require('react-dom')
const _ = require('lodash')
import RaisedButton from 'material-ui/RaisedButton'

//components
//such as header or main or topics etc
//const Topics = require('./topics')

module.exports = function App (props) {
  console.log("State", state)

  const { store, state } = props

  console.log("This is store", store)
  const route = state.route

  switch (route) {
    case 'index':
      return (
        <div className="choose">
          <h1>{state.appName}</h1>
          <h3>{state.welcome}</h3>
          <h4>{state.description}</h4><br/><br/>
          <p>{state.choose}</p><br/><br/>

          <div className="topics">
            <RaisedButton
              onClick={
                () => {
                  store.dispatch({
                    type: 'CHANGE_ROUTE',
                    payload: 'motivation'
                  })
                }
              }
              className="raisedButton"
              backgroundColor="#adbce6">
                Motivation
            </RaisedButton><br/><br/>

            <RaisedButton className="raisedButton" backgroundColor="#adbce6">
              Study Tips
            </RaisedButton><br/><br/>

            <RaisedButton className="raisedButton" backgroundColor="#adbce6">
              Have a laugh
            </RaisedButton><br/><br/>

          </div>
        </div>
      )
    case 'motivation':
      return (<div>motivation page</div>)
  }

}
