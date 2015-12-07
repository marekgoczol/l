module.exports = function(g) {
    g.initConfig({
        pkg: g.file.readJSON('package.json'),

        jshint: {
            app: {
                // options: { jshintrc: true },
                src: [
                    'Gruntfile.js',
                    'assets/js/main.js'
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
                    'assets/css/above-the-fold.css': 'assets/css/scss/above-the-fold.scss'
                }
            }
        },

        connect: {
            serve: {
                options: {
                    port: 8000,
                    hostname: 'localhost'
                }
            }
        },

        watch: {
            rebuild: {
                tasks: ['sass-compress', 'jshint'],
                options: { livereload: 35729 },
                files: [
                    'assets/css/scss/*.scss',
                    'assets/*.js',
                    'index.html'
                ]
            }
        }

    });

    g.loadNpmTasks('grunt-contrib-jshint');
    g.loadNpmTasks('grunt-contrib-connect');
    g.loadNpmTasks('grunt-contrib-watch');
    g.loadNpmTasks('grunt-contrib-sass');

    g.registerTask('default', [
        'connect:serve',
        'watch:rebuild'
    ]);

    g.registerTask('sass-compress', [
        'sass:dist'
    ]);
};
