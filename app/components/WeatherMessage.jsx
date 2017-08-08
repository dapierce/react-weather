var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p>Currently {temp}° F in {location}.</p>
    </div>
  );
}

module.exports = WeatherMessage;
