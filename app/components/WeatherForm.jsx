var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.search.value;

    if(location.length > 0) {
      this.refs.search.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group">
            <input type="search" ref="search" className="input-group-field" placeholder="Search weather by city"/>
            <div className="input-group-button">
              <button className="button hollow">Go</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
