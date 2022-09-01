const axios = require("axios")


const weatherLondon = async function (req, res) {
    try {
        let q = req.query.q
        let key = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}`
        }
        let result = await axios(options);
        let data = result.data                                              //.main.temp
        res.status(200).send({ temp: data, status: true })
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }

}

const shortedCities = async function (req, res) {
  try {
    let cities =[ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let cityTempObj = []
    let key = req.query.appid
    
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i];
        let object ={city:city}
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        }
        let result = await axios(options);
        object.temp = result.data.main.temp
        cityTempObj.push(object)
    }
    let sort = cityTempObj.sort((a,b) =>a.temp - b.temp)

   res.status(200).send({ data: sort, status: true })
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: error.message })
  }

   
}

module.exports.weatherLondon = weatherLondon
module.exports.shortedCities = shortedCities