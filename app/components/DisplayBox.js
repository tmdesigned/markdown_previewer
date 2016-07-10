var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');
require('../theme/main.scss');

function createMarkup(encoded) { return {__html: encoded}; };


function DisplayBox(props){
  return (
      <div style={styles.boxStyle} className="displayBoxStyle" dangerouslySetInnerHTML={{'__html':props.output}} />
  )
}

DisplayBox.propTypes = {
  output : PropTypes.string

}


module.exports = DisplayBox;
