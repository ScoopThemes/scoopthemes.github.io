'use strict';
var path = require('path');

module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/main.css': 'sass/main.scss'
				}
			}
		},
	    watch: {
	    	options: { livereload: true },
	      	sass: {
	        	files: ['sass/main.scss'],
	        	tasks: ['newer:sass:dist'],
	      	}
	    },
	    bumpup: {
	        file: 'package.json'
	    },
		connect: {
			server: {
				options: {
					port: 9005,
					base: '',
					hostname: '*',
					livereload:true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-bumpup');
	grunt.task.registerTask('default', ['connect','watch']);

};