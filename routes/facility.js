const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true }))

const facilityCtrl = require('../controllers/facility');


router.get('/add', facilityCtrl.facility_create_get)
router.post('/add', facilityCtrl.facility_create_post)

// Route to get a specific facility by ID and render the details page
router.get('/index', facilityCtrl.facility_index_get); 

// Route to get a specific facility by ID and render the details page
router.get('/detail', facilityCtrl.facility_show_id); 
module.exports = router;