const express = require('express')
const router = express.Router()
const commentCtrl = require('../controllers/comment')

router.post('/add', commentCtrl.comment_create_post) // Route to add comment
// Route to get facility details and comments (GET)
router.get('/facility/detail', commentCtrl.comment_create_get)
module.exports = router
