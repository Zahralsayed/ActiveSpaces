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

exports.camps_create_get = (req, res) => {
  Pools.find()
  .then((pools) => {
    res.render("camps/add", {poolss});
  })
  .catch((err) => {
    console.log(err)
  })
}

exports.camps_create_post = (req, res) => {
  console.log(req.body);
  let camps = new Camps(req.body);

  // Save Camps
  // Referenced Design Model
  camps.save()
  .then(() => {

    req.body.pools.forEach(pools => {
      Pools.findById(pools)
      .then((pools) => {
        pools.camps.push(camps);
        pools.save();
      })
      .catch((err) => {
        console.log(err);
      })
    })
    res.redirect("/camps/index");

  })
  .catch((err) => {
    console.log(err)
  })

  // Embedded Design Model
  // Pools.findById(req.body.pools)
  // .then(pools => {
  //   pools.camps.push(camps);
  //   pools.save();
  //   res.redirect("/pools/index")
  // })
  // .catch(err => {
  //   conosle.log(err)
  // })
}

exports.camps_index_get = (req, res) => {
  Camps.find().populate('pools')
  .then((campss) => {
    res.render("camps/index", {campss, dayjs});
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.camps_show_get = (req, res) => {
  console.log(req.query.id);
  Camps.findById(req.query.id).populate('pools')
  .then((camps) => {
    res.render("camps/detail", {camps, dayjs})
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.camps_edit_get = (req, res) => {
  console.log(req.query.id);
  Camps.findById(req.query.id)
  .then(camps => {
    res.render("camps/edit", {camps});
  })
  .catch( err => {
    console.log(err)
  })
}

exports.camps_update_post = (req, res) => {
  console.log(req.body.id);
  Camps.findByIdAndUpdate(req.body.id, req.body)
  .then(() => {
    res.redirect("/camps/index");
  })
  .catch((err) => {
    console.log(err);
  })
}

exports.camps_delete_get = (req, res) => {
  console.log(req.query.id);
  Camps.findByIdAndDelete(req.query.id)
  .then(()=>{
      res.redirect("/camps/index");
  })
  .catch(err => {
      console.log(err);
  })
};

