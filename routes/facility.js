const express = require('express');
const facilityCtrl = require('../controllers/facility');
const router = express.Router();

// Route to get a specific facility by ID and render the details page
router.get('/', facilityCtrl.getAllFacilities); 

// Route to get a specific facility by ID and render the details page
router.get('/detail', facilityCtrl.getFacilityById); 
module.exports = router;