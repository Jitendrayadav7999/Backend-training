const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getByDistrictid", CowinController.getByDistrict)

module.exports = router;