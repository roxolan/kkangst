const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = mongoose.model('User')

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    // Search MongoDB for user with supplied email address:
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err) }
      if (!user) {
        // If no user is found, return false and a message:
        return done(null, false, {
          message: 'Incorrect username.'
        })
      }
      if (!user.validPassword(password)) {
        // If password is incorrect, return false and a message:
        return done(null, false, {
          message: 'Incorrect password.'
        })
      }
      // If we've got to the end we can return user object:
      return done(null, user)
    })
  }
))
