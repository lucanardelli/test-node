const axios = require('axios');

axios.get('https://api.myip.com')
  .then(function (response) {
    // handle success
    console.log("Your IP is "+response.data.ip);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

