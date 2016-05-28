const grunt = require('grunt')

module.exports = (grunt) => {

  var config = { }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
    ' * <%= pkg.version %>\n' +
    ' */\n'
  })

  return config
}(grunt)
