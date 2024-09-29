const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT

const app = express()

app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
})

app.listen(PORT, () => {
  console.log(`SpaceActive is running on PORT ${PORT}`)
})
