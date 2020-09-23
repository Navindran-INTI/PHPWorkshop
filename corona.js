const axios = require('axios').default;

console.log('starting a server');
const prompt = require('prompt-sync')();

const countrycode = prompt('city code : ');
const startdate = prompt('YYYY-MM-DD : ');
const enddate = prompt('YYYY-MM-DD : ');
axios({
  
    method :'get',
    url : 'https://api.oip.tmrnd.com.my/app/t/opendata.oip.tm.com.my/coronatracker/1.0.0/country',
    params : {
        startDate: startdate,
        endDate: enddate,
    countryCode: countrycode
    },
    headers :{
        Authorization : 'Bearer 9f88e7f5-e22e-3a6f-8a2e-2a4fc6b472ab'
    }
}).then((result) => {
console.log(result.data)
})

console.log('processing');

