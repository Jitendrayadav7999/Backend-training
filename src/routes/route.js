const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController')

router.get("/weather-Landon", weatherController.weatherLondon)

router.get("/shorted-cities",weatherController.shortedCities)


module.exports = router;