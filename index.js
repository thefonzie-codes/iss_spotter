// const { fetchMyIP } = require("./iss");
// const { fetchCoordsByIP } = require("./iss");
// const { fetchISSFlyOverTimes } = require("./iss");

const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(passTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   }
//   console.log('It worked! Returned IP: ', ip);
// })


// fetchCoordsByIP('8.8.8.8', (error, coods) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   }
//   console.log('It worked! Returned coords: ', coords);
// })

// const coords = { latitude: 32.69922, longitude: -117.11281 }

// fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   }
//   console.log('It worked! Flyover times are: ', flyOverTimes);
// })



