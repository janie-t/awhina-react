const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)

  return(newState)


  // switch (action.type) {
  //     case 'ADD_TO_CART':
  //       const toAdd = state.products[action.payload]
  //
  //       toAdd.quantity += 1
  //       toAdd.subtotal += toAdd.price
  //
  //       newState.products[action.payload] = toAdd
  //       newState.total += toAdd.price
  //
  //       return newState
  //
  //     case 'DELETE_ITEM':
  //       const toDelete = state.products[action.payload]
  //
  //       toDelete.quantity -= 1
  //       toDelete.subtotal -= toDelete.price
  //
  //       return newState
  //
  //     default: // must have default
  //       return newState
  //   }

}
