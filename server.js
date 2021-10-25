// import modules

import express from 'express'

import * as gradesDb from "./data/grades-db.js"


// Create Express app

const app = express()

// Configure the app (app.set)

app.set ("view engine", "ejs")

// Mount Middleware (app.use)



// Mount routes

// app.get('/', function(req, res) {
// res.send("<h1> hello, friend</h1>")
// })

app.get('/home', function(req, res) {
  res.render('home')
})


app.get('/grades', function(req, res) {
  gradesDb.find({}, function(error, grades) {
    res.render('grades/index', {
      grades: grades,
      error: error
    })
  })
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})