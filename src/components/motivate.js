const React = require('react')
import RaisedButton from 'material-ui/RaisedButton'

module.exports = function (props) {
  const { route, appName, topic } = props

  return (
    <div>
      <h1>āwhina</h1>
      <h4>Motivation and Inspiration</h4>

      <div className ='item'>
        media item
      </div>

      <div className ='source'>
        author or source
      </div>
      <br/>

      <div className="newTopic">
        <button>Click for another one</button>
      </div>

      <div id="mediaChoice">
        <p>Select the type of media</p>
        <input type="checkbox" name="choose" value="text" default="true" defaultChecked/> Text
        <input type="checkbox" name="choose" value="image" defaultChecked/> Image
        <input type="checkbox" name="choose" value="video" defaultChecked/> Video
      </div>

    </div>
  )

}
