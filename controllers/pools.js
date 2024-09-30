// Load Dependencies
const dayjs = require('dayjs');
var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

// Import Models
const {Camps} = require("../models/Camps.js");
const {Pools} = require("../models/Pools.js");

// CRUD Operation
// Create = HTTP GET and POST
// Read = HTTP GET
// Update = HTTP GET and POST
// Delete - HTTP DELETE 

exports.pools_create_get = (req, res) => {
  res.render("pools/add");
}

exports.pools_create_post = (req, res) => {
  console.log(req.body);
  let pools = new Pools(req.body);

  // Save Pools
  pools.save()
  .then(() => {
    res.redirect("/pools/index");
  })
  .catch((err) => {
    console.log(err)
    res.send("Please try again later!!!");
  })
}

exports.pools_index_get = (req, res) => {
  Pools.find()
  .then((poolss) => {
    res.render('pools/index', { camps: camps });
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.pools_show_get = (req, res) => {
  console.log(req.query.id);
  Pools.findById(req.query.id).populate('camps')
  .then((pools) => {
    res.render("pools/detail", {pools, dayjs})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.pools_edit_get = (req, res) => {
  console.log(req.query.id);
  Pools.findById(req.query.id)
  .then(pools => {
    res.render("pools/edit", {pools});
  })
  .catch( err => {
    console.log(err)
  })
}

exports.pools_update_post = (req, res) => {
  console.log(req.body.id);
  Pools.findByIdAndUpdate(req.body.id, req.body)
  .then(() => {
    res.redirect("/pools/index");
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.pools_delete_get = (req, res) => {
  console.log(req.query.id);
  Pools.findByIdAndDelete(req.query.id)
  .then(()=>{
      res.redirect("/pools/index");
  })
  .catch(err => {
      console.log(err);
  })
};

