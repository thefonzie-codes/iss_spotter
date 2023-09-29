const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json')
};

const fetchCoordsByIP = (body) => {
  parsedIP = JSON.parse(body).ip;
  return request(`http://ipwho.is/${parsedIP}`)
};

const fetchISSFlyOverTimes = (body) => {
  
  const coords = {};
  coords.latitude = JSON.parse(body).latitude
  coords.longitude = JSON.parse(body).longitude
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`)
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response ;
    })
  };

  const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };

module.exports = { nextISSTimesForMyLocation, printPassTimes }