// Load Dependencies
const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')

const session = require('express-session')
//const passport = require('passport')

// Require and Initialize dotenv
require('dotenv').config()

// PORT Configuration
const PORT = process.env.PORT

// Initialize Express
const app = express()

//require('./config/passport')

// Look for static file in the public folder.
// (CSS, JS,  Image, Video, Audio)
app.use(express.static('public'))

// Database Configuration
const db = require('./config/db')

// Nodejs to look in a folder called views for all the ejs files
app.set('view engine', 'ejs')

// Look in views folder for a file named layout.ejs
app.use(expressLayouts)

// Passport and Session configurations
/*app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
)*/

// Share the information with other pages
/*app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
})

app.use(passport.initialize())
app.use(passport.session())*/

// Import Routes
const indexRouter = require('./routes/index')
//const authRouter = require('./routes/auth')
const facilityRouter = require('./routes/facility')

// Mount Routes
app.use('/', indexRouter)
//app.use('/', authRouter)
app.use('/facilities', facilityRouter)


app.listen(PORT, () => {
  console.log(`ACTIVESPACES is running on PORT ${PORT}`)
})
