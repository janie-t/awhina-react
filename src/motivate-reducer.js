const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action) {
  const newState = clone(state)

  request.get('/api/v1/motivate')

  render(newState)




}
