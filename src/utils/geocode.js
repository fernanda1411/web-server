const request = require('request')



// Geocoding
// Address -> Lat/Long -> Weather

const geocode = (address, callback) => {
    const apiToken = 'pk.eyJ1IjoiZmVybmFuZGExNDExIiwiYSI6ImNrNzJndHJ2ZTAwZzMzZW55eTQ1YXFzOTEifQ.GU83m-AerS5aUTshcqxzNA';
    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + apiToken

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0){
            callback('Unable to find a location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name,
            })
        }
    })
}


module.exports = geocode