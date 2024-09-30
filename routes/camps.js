const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true}));

const ensureLoggedIn = require("../config/ensureLoggedIn");

// Controller
const campsCtrl = require("../controllers/camps")

// Routes
router.get("/add", ensureLoggedIn, campsCtrl.camps_create_get);
router.post("/add", ensureLoggedIn, campsCtrl.camps_create_post);

router.get("/index", campsCtrl.camps_index_get);
router.get("/detail", campsCtrl.camps_show_get);

router.get("/edit", ensureLoggedIn, campsCtrl.camps_edit_get);
router.post("/update", ensureLoggedIn, campsCtrl.camps_update_post);

router.get("/delete", ensureLoggedIn, campsCtrl.camps_delete_get);

module.exports = router;