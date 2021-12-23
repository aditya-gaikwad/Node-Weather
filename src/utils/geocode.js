const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRpdHlhZ2Fpa3dhZCIsImEiOiJja3hkY2MybG8xNDRuMndwZzBzcmplb3d4In0.dH82SH8kPMoogQUWeSRR-w&limit=1'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(body.features.length===0){
            // console.log(body);
            callback('Unable to find location, try another search', undefined)
        } else{
            // console.log(body.latitude)
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0] ,
                location :  body.features[0].place_name
            })
        }
    })
}

module.exports = geocode 