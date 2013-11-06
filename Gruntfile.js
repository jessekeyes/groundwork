module.exports = function(grunt) {
 
		// Project configuration.
		grunt.initConfig({
 
				//Read the package.json (optional)
				pkg: grunt.file.readJSON('package.json'),
				watch: {
					files: ['js/components/*', 'js/plugins/*', 'src/scss/**/*'],
					tasks: ['uglify', 'compass']
				},
				uglify: {
					dev: {
						options: {
							banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
							mangle: false
						},
						files: {
							'js/app.js': ['js/plugins/*', 'js/components/*' ]
						}
					}
				},
				compass: {
					dev: {
						options: {
							sassDir: 'src/scss',
							cssDir: 'css'
						}
					}
				},
		    autoprefixer: {
		      dev: {
		        options: {
		          browsers: ['last 2 versions']
		        },
		        files: {
		          'css/groundwork.css': ['css/groundwork.css']
		        }
		      }
		    },
		    cssmin: {
		      minify: {
		        expand: true,
		        cwd: 'css/',
		        src: ['*.css', '!*.min.css'],
		        dest: 'css/',
		        ext: '.css'
		      }
		    }
		});
 
		// These plugins provide necessary tasks.
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-compass');
		grunt.loadNpmTasks('grunt-autoprefixer');
		grunt.loadNpmTasks('grunt-contrib-cssmin');
	  grunt.registerTask('default', ['dev']);
	  grunt.registerTask('dev', ['compass', 'uglify', 'autoprefixer']);
	  grunt.registerTask('build', ['compass', 'uglify', 'autoprefixer', 'cssmin']);
 
};