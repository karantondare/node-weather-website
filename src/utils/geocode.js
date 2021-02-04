const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoia2FyYW50b25kYXJlIiwiYSI6ImNra21qbnB5MDIzMmoyb3F0MzB0Mjh6dGMifQ.sHmRy130cOIKUNWUKPbQIA&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to get the coordinates for the entered location.");
    } else if (body.features.length === 0) {
      callback("Unable to find the location entered. Try another search.");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
