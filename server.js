/*
Microsoft DEV283x (edX) module 2 assignment.
(c)2018
Author: pmvanvliet
*/
// Require dependencies
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorhandler = require('errorhandler')
// Instantiate an Express application
let app = express()
// Use bodyparser
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
// Use the store via middleware
let store = { posts: [ { comments: [] } ] }
app.use((req, res, next) => {
  req.store = store
  next()
})
// Routes are defined at /routes/index.js
const router = require(path.join(__dirname, 'routes/index.js'))
// Router listens on / (root)
app.use('/', router)
// Listen on port 3000
app.listen(3000)