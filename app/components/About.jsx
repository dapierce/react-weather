var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a basic weather app that polls the <a href="http://openweathermap.org/apiOpenWeatherMap">OpenWeatherMap API</a>, made using <a href="https://facebook.github.io/react/React">React</a> and following a Udemy tutorial.</p>
      <p>Get the source code at <a href="https://github.com/dapierce/react-weather">GitHub</a>!</p>
    </div>
  );
}

module.exports = About;
