const request = require("request");

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://geo.ipify.org/api/v2/country,city?apiKey=at_9ZCinoJOiKuF9MRSGofgEXC0Eoc07&ipAddress=${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const parsedBody = JSON.parse(body);
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }
  
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coords: ${body}`), null);
      return;
    }
    
    const coords = {};
    coords.latitude = JSON.parse(body).location.lat;
    coords.longitude = JSON.parse(body).location.lng;
    console.log(coords);

    callback(null, coords);
  });
};


fetchCoordsByIP('8.8.8.8', () => {
});

const fetchISSFlyOverTimes = (coords, callback) => {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coords: ${body}`), null);
      return;
    }
    
    const flyOverTimes = JSON.parse(body).response;
    
    callback(null, flyOverTimes);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};