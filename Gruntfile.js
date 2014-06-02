/*jshint camelcase: false*/

module.exports = function (grunt) {
  'use strict';

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: 'public',
          port: 1337
        }
      }
    },
    watch: {
      scss: {
        files: ['src/*.scss'],
        tasks: ['sass']
      },
      coffee: {
        files: ['src/*.coffee'],
        tasks: ['coffee']
      },
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade']
      },
      css: {
        files: ['public/*.css'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['public/*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['public/*.html'],
        options: {
          livereload: true
        }
      }
    },
    coffee: {
      compile: {
        options: {
          bare: true,
          flatten: false
        },
        files: {
          'public/app.js': 'src/app.coffee'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.scss'],
          dest: 'public',
          ext: '.css'
        }]
      }
    },
    jade: {
      compile: {
        files: {
          'public/index.html': 'src/**/*.jade'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'sass',
    'coffee',
    'jade',
    'connect',
    'watch'
  ]);

};
