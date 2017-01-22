const debug = require('debug')('components:shop')
const React = require('react')
const _ = require('lodash')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { RaisedButton } = require('material-ui')

//components
const display = require('./display')

module.exports = connect((state) => state)(Shop)

function Home (props) {
  debug({props})
  const { appName, welcome, description, choose, topics} = props

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
          Helpful links
        </RaisedButton>

        <RaisedButton className="raisedButton" backgroundColor="pink">
          Contact us
        </RaisedButton><br/><br/>
      </div>
    </div>
  )
}
