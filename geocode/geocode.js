const request = require('request');

let geocodeAddress = (address,callback) => {
    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=08orlJZVCWKnF5qZGtBTmGN6HWJjGeK7&location=${encodeURIComponent(address)}`,
        json: true,
    },(error,response,body)=>{
        if(error){
            callback('unable to connect to google servers');
        } else if(body.results[0].locations.length <= 0){
            callback('unable to find given address');
        } else {
            callback(undefined,{
                address: body.results[0].providedLocation.location,
                latitude: body.results[0].locations[0].latLng.lat,
                longtitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
    
};

module.exports.geocodeAddress = geocodeAddress;