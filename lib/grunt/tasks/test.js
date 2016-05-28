const config = require('../config')

module.exports = function(grunt) {
  grunt.registerTask('mochaTest', function () {
    global.isWatching = true
  })

  // grunt.registerTask('watch-less', [ 'setWatch' ])

  grunt.loadNpmTasks('grunt-mocha-test')
  grunt.loadNpmTasks('grunt-contrib-watch')
}
