const debug = require('debug')('components:topics')
const React = require('react')

module.exports = function (props) {
  const { topic } = props

  return (
    <div>
      <a href=''>{topic}</a>
    </div>
  )
}
