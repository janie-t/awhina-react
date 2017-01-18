const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'CHANGE_ROUTE':

      newState.route = action.payload
      return(newState)

    default: // must have default
      return newState
  }
}
