var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=ad8fb47935192d2a3f19055735e27783&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        // get cannonical city name, and temp
        return {
          name: res.data.name,
          temp: res.data.main.temp
        };
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
