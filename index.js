const { fetchMyIP } = require("./iss");
const { fetchCoordsByIP } = require("./iss");
const { fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   } else {
//     console.log('It worked! Returned IP: ', ip);
//   }
// })


// fetchCoordsByIP('8.8.8.8', (error, coods) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   } else {
//     console.log('It worked! Returned coords: ', coords);
//   }
// })

// const coords = { latitude: 32.69922, longitude: -117.11281 }

// fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//   } else {
//     console.log('It worked! Flyover times are: ', flyOverTimes);
//   }
// })

