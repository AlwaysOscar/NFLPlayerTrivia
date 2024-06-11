require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const quizzesRoutes = require('./routes/quizzes')

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/quizzes', quizzesRoutes)

// connect to db
mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 