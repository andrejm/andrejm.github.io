module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          // outputStyle: 'nested',
          sourceMap: true
        },
        files: {
          'css/style.css': 'scss/app.scss',
        }        
      }
    },

    concat: {
      options: {
      },
      scripts: {
        src: [
          // 'bower_components/foundation/js/foundation/foundation.js', 
          // 'bower_components/foundation/js/foundation/foundation.topbar.js',
          'js/app.js'
        ],
        dest: 'js/main.js',
        nonull: true
      },
      // styles: {
      //   src: [
      //   // 'css/normalize.css', 
      //   // 'bower_components/jquery-ui/themes/base/core.css',
      //   // 'bower_components/jquery-ui/themes/base/datepicker.css',
      //   // 'bower_components/jquery-ui/themes/base/tooltip.css',
      //   // 'css/icomoon.css',
      //   // 'css/app.css'
      // ],
      //   dest: 'css/style.css'
      // }

    },

    // cssmin: {
    //   options: {
    //     sourceMap: true
    //   },
    //   target: {
    //     files: {'css/style.css': ['css/app.css']}
    //   }
    // },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        // files: ['scss/*.scss', 'scss/magnumreal/*.scss'],
        files: ['scss/*.scss', 'scss/**/*.scss'],
        tasks: ['sass', 'concat']
      },

      // php : {
      //   files: ['*.php', 'inc/*.php']
      // },

      html : {
        files: ['*.html']
      },

      js : {
        files: ['js/*.js'],
        tasks: ['concat']
      },

      options: {
        livereload: true
      }
    },

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch']);
};