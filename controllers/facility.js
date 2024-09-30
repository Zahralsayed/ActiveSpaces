const Facility = require('../models/Facility');

// Get all facilities
exports.getAllFacilities = (req, res) => {
    Facility.find().populate('owner', 'username')
        .then(facilities => res.render('facility/index', { facilities }))
        .catch((err) => {
            console.log(err)
        });
};

// Get facility by ID
exports.getFacilityById = (req, res) => {
    Facility.findById(req.query.id).populate('owner', 'username')
        .then(facility => {
            res.render('facility/detail', { facility }); // Render details page
        })
        .catch((err) => {
        console.log(err)
    })};


    
    