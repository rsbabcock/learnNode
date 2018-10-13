
const https = require('https')
const api = require('./api.json')
// const key = "8ac793fb66bd75442512fc8c93ae0439"


// let inputs = process.argv.slice(2)

function printWeather(weather) {
    console.log(`Weather in ${weather.city.name} has the following forecast`)
}
function printForecast(weather){
    weather.list.map(day => {
       console.log( day.weather)
    })
}
function get(query) {
    const request = https.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${query},us&units=imperial&APPID=${api.key}`, response => {
        try {
            let body = ''
            // read the data
            response.on('data', chunk => {
                body += chunk
            })
            // parse the data?
            response.on('end', () => {
                const weather = JSON.parse(body)
                printWeather(weather)
                printForecast(weather)
                
            })
        }
        catch (error) {
            response.on('error', function (error) {
                console.error(error.message)
            })
        }
    })
}

module.exports.get = get