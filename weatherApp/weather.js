
const https = require('https')
const api = require('./api.json')
// const key = "8ac793fb66bd75442512fc8c93ae0439"


// let inputs = process.argv.slice(2)

function printWeather(weather){
    console.log(`Weather in ${weather.name} is ${weather.main.temp}`)
}

function get(query){
    // const server = `api.openweathermap.org/data/2.5/weather?zip=37207&APPID=8ac793fb66bd75442512fc8c93ae0439`
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${query}&units=imperial&APPID=${api.key}`, response => {
        let body = ''
        // read the data
        response.on('data', chunk => {
            body += chunk
        })
        // parse the data?
        response.on('end', ()=> {
            const weather = JSON.parse(body)
            printWeather(weather)
        })
        response.on('error', function(error){
            console.error(error.message)
        })
    })
}

module.exports.get = get