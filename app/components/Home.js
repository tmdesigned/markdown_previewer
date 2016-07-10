var React = require('react');
var InputBox = require('./InputBox');
var DisplayBox = require('./DisplayBox');
var styles = require('../styles/index.js');
var Marked = require('marked');


var helpText = "Heading\n===\n\nSubheading\n---\n\n### Sub-subheading\n\nParagraphs are separated\nby blank lines.\n\nText styling: *italic*, **bold**, ~~strikethrough~~\n\nList:\n\n* item1\n* item2\n* item3"

function Header (){
  return(
    <div>
      <span className="lead">Markdown Preview</span>
      <p className="text-info">A project demonstrating React by Taylor Morgan</p>
      </div>
  )


}

var Home = React.createClass({
  getInitialState: function(){
    return {
      resultText : Marked(helpText)   }
  },
  handleChange: function(e){
    this.setState({resultText:Marked(e.target.value)});

  },
  render: function(){
    return(
      <div className="container" style={styles.frame}>
        <Header />
        <div className="jumbotron col-sm-12">
          <div className="col-sm-6" >
            <InputBox onUpdate={this.handleChange} inputText={helpText} />
          </div>
          <div className="col-sm-6">
            <DisplayBox output={this.state.resultText} />
          </div>
        </div>
      </div>
    )

  }

});

module.exports = Home;
