const config = require('../config')

module.exports = function(grunt) {
  grunt.registerTask('setWatch', function () {
    global.isWatching = true
  })

  // grunt.registerTask('watch-less', [ 'setWatch' ])

  grunt.loadNpmTasks('grunt-banner')
  grunt.loadNpmTasks('grunt-contrib-watch')
}