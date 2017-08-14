var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <input type="text" ref="location" className="input-group-field" placeholder="City Name"/>
            <div className="input-group-button">
              <button className="button hollow">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
