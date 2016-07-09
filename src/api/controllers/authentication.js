const passport = require('passport')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const sendJSONresponse = function(res, status, content) {
  res.status(status)
  res.json(content)
}

module.exports.register = function(req, res) {
  if(!req.body.name || !req.body.email || !req.body.password) {
    // Respond with an error status if not all required fields are found:
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    })
    return
  }
  var user = new User()
  user.name = req.body.name
  user.email = req.body.email

  // Use setPassword method to set salt and hash:
  user.setPassword(req.body.password)

  user.save(function(err) {
    var token;
    if (err) {
      sendJSONresponse(res, 404, err)
    } else {
      // Generate a JWT using schema method and send it to browser:
      token = user.generateJwt()
      sendJSONresponse(res, 200, {
        "token" : token
      })
    }
  })
}

module.exports.login = function(req, res) {
  if(!req.body.email || !req.body.password) {
    sendJSONresponse(res, 400, {
      "message": "All fields required"
    })
    return
  }
  passport.authenticate('local', function(err, user, info){
    var token

    if (err) {
      sendJSONresponse(res, 404, err)
      return
    }

    if (user) {
      token = user.generateJwt()
      sendJSONresponse(res, 200, {
        "token": token
      })
    } else {
      // return info message (why authentication failed):
      sendJSONresponse(res, 401, info)
    }
    // make req & res available to Passport:
  })(req, res)
}
