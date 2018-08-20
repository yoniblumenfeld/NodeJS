const request = require('request');
 request({
     url: 'https://api.darksky.net/forecast/d6b9ae5e7b6255bd7b298ec795c3b6dd/32.150306,34.843736',
     json:true 
},(error,response,body)=>{
    let temp = body.currently.tempature;
    console.log(`The current tempature is: ${temp}`);
});