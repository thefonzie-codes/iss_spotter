const fetchMyIP = require('./iss_promised2')

fetchMyIP()
  .then((ip) => console.log(ip))