const axios = require('axios').default;

console.log('starting a server');
const prompt = require('prompt-sync')();

const name = prompt('city name : ');
const details = prompt('details (true/false) : ');
axios({
  
    method :'get',
    url : 'https://api.oip.tmrnd.com.my/app/t/openservice.oip.tm.com.my/accuracy/1.0.0/weather',
    params : {
        city: name,
        details: details,
     //   countryCode: 'MY'
    },
    headers :{
        Authorization : 'Bearer 9f88e7f5-e22e-3a6f-8a2e-2a4fc6b472ab'
    }
}).then((result) => {
console.log(result.data)
})

