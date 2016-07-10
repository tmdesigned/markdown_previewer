var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');

var InputBox = React.createClass({
  propTypes: {
      onUpdate : PropTypes.func.isRequired,
      inputText : PropTypes.string
  },
  render: function(){
    return (

          <textarea onChange={this.props.onUpdate} placeholder={this.props.inputText} style={styles.boxStyle}/>

    )

  }

})

module.exports = InputBox;
