const mongoose = require('mongoose')

const classTimeSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  timing: String,
  room: String
})

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date,
    'default': Date.now
  }
})

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  groups: [String],
  classTimes: [classTimeSchema],
  reviews: [reviewSchema]
})

mongoose.model('Course', courseSchema)
