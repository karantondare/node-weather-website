const request = require("request");
const geocode = require("./geocode");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a9434de21a4ad33f5314cbd0398daf43&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather service.");
    } else if (body.error) {
      callback("Unable to find location.");
    } else {
      callback(
        undefined,
        `It is ${body.current.weather_descriptions[0]}. Current temperature is ${body.current.temperature}°C. The humidity is ${body.current.humidity}% with ${body.current.precip} % chance of rain.`
      );
    }
  });
};

module.exports = forecast;
