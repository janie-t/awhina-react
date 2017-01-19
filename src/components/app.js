const React = require('react')
const ReactDOM = require('react-dom')
const _ = require('lodash')
import RaisedButton from 'material-ui/RaisedButton'

//components
//such as header or main or topics etc
const Motivate = require('./motivate')

module.exports = function App (props) {

  const { store, state } = props

  console.log("State", state)

  console.log("These are the state.topics", state.topics)
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
            {
              state.topics.map((topic) => {
                return (
                  <RaisedButton
                    onClick={
                      () => {
                        store.dispatch({
                          type: 'CHANGE_ROUTE',
                          payload: topic
                        })
                      }
                    }
                    className="raisedButton"
                    backgroundColor="#adbce6">
                      {topic}
                  </RaisedButton>
                )
              })
            }
            <div className ="break">
            </div>
            <RaisedButton className="raisedButton" backgroundColor="pink">
              Contact us
            </RaisedButton><br/><br/>

          </div>
        </div>
      )
    case 'motivation':
      return < Motivate store={store} />
  }

}
