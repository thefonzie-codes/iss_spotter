const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss");
const { nextISSTimesForMyLocation } = require("./iss");


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
  }

  console.log('It worked! Returned IP: ', ip);
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("It didn't work!", error);
    }

    fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
      if (error) {
        console.log("It didn't work!", error);
      }

      nextISSTimesForMyLocation((error, passTimes) => {
        if (error) {
          return console.log("It didn't work!", error);
        }

        console.log(passTimes);
      });

      console.log('It worked! Flyover times are: ', flyOverTimes);
    });

    console.log('It worked! Returned coords: ', coords);
  });
});







