module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'assets/js/main.js'],
            options: {
                browser: true,
                camelcase: true,
                indent: 4,
                curly: true
            }
        },

        clean: {
            'vendor-js': {
                src: [
                    'assets/js/vendors.js',
                    'assets/js/vendors.min.js'
                ]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/style.css': 'assets/css/scss/style.scss',
                }
            }
        },

        concat: {
            options: { separator: ';' },
            'vendor-js': {
                src: [
                    'assets/js/bower_components/jquery/dist/jquery.js',
                    'assets/js/bower_components/underscore/underscore.js'
                ],
                dest: 'assets/js/vendors.js'
            }
        },

        uglify: {
            'vendor-js': {
                files: {
                    'assets/js/vendors.min.js': ['assets/js/vendors.js']
                }
            },
            main: {
                files: {
                    'assets/js/main.min.js': ['assets/js/main.js']
                }
            }
        },

        watch: {
            rebuild: {
                files: [
                    '*.html', 'assets/js/main.js', 'lib/**/*.html', 'assets/css/**/*.scss'
                ],
                tasks: ['sass-compress', 'jshint'],
                options: {
                    livereload: true,
                    port: 35729
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');


    grunt.registerTask('clean-vendors', ['clean:vendor-js']);
    grunt.registerTask('vendor-js', ['clean:vendor-js', 'concat:vendor-js', 'uglify:vendor-js']);
    grunt.registerTask('sass-compress', ['sass:dist']);
    grunt.registerTask('default', ['watch:rebuild']);
};
