const geocode = require('./geocode/geocode');
//08orlJZVCWKnF5qZGtBTmGN6HWJjGeK7
//dark sky api key: d6b9ae5e7b6255bd7b298ec795c3b6dd
//dark sky api url example: https://api.darksky.net/forecast/d6b9ae5e7b6255bd7b298ec795c3b6dd/37.8267,-122.4233
const yargs = require('yargs');
const weather = require('./weather/weather')
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;
    
geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results,undefined,2));        
        weather.getWeather(results.latitude,results.longtitude,(errorMsg,weatherResults) => {
            if(errorMsg){
                console.log(errorMsg);
            }
            else{
                console.log(JSON.stringify(weatherResults,undefined,2));
            }
        });
    }
});
