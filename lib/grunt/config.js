const grunt = require('grunt')

module.exports = (grunt) => {
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
    ' * <%= pkg.version %>\n' +
    ' */\n'
  })
}
