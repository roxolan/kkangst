const config = require('../config')

module.exports = (grunt) => {
  grunt.registerTask('setWatch', () => {
    global.isWatching = true
  })

  grunt.registerTask('watch-less', [ 'setWatch' ])

}
