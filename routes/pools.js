const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true}));

// Controller
const poolsCtrl = require("../controllers/pools")

// Routes
router.get("/add", poolsCtrl.pools_create_get);
router.post("/add", poolsCtrl.pools_create_post);

router.get("/index", poolsCtrl.pools_index_get);
router.get("/detail", poolsCtrl.pools_show_get);

router.get("/edit", poolsCtrl.pools_edit_get);
router.post("/update", poolsCtrl.pools_update_post);

router.get("/delete", poolsCtrl.pools_delete_get);

module.exports = router;