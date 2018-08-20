const request = require('request');

let getWeather = (lat,lng,cb) => {
    request({
        url: `https://api.darksky.net/forecast/d6b9ae5e7b6255bd7b298ec795c3b6dd/${lat},${lng}`,
        json:true 
    },(error,response,body)=>{
    if(error){
        cb('unable to connect to forecast.io servers');
    }else if(response.Statuscode === 400){
        cb('invalid location given!');
    }else if(String(body) === body){
        if(body.trim() === 'Forbidden'){
        cb('You are not authorized to access this page!\ncheck if your key is right!');
        }
    }else if(response.statusCode === 200){
        cb(undefined,{
            temperature: body.currently.temperature,
            realTemp: body.currently.apparentTemperature
        });
    }
    else{
        cb('Unknown problem. failed to fetch weather.');
    }
    });
};
module.exports.getWeather = getWeather;