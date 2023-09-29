// const {fetchMyIP} = require('./iss_promised2')
// const {fetchCoordsByIP} = require('./iss_promised2')
// const {fetchISSFlyOverTimes} = require('./iss_promised2')
const { nextISSTimesForMyLocation } = require('./iss_promised')
const { printPassTimes } = require('./iss_promised')

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
});
