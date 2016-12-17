module.exports = function (grunt) {

    var path = require('path');
    var APP_PATH = path.join(__dirname);

    grunt.initConfig({

        cssmin: {
            target: {
                files: {
                    'app/styles/css/app.min.css': ['app/styles/css/app.css']
                }
            }
        },

        uglify: {
            target: {
                files: {
                    'app/scripts/app.min.js': ['app/modules/**/*.js']
                }
            }
        },

        preprocess: {
            dev: {
                src: 'index_preprocess.html',
                dest: 'index.html',
                options: {
                    inline: true,
                    context: {
                        APP_ENV: 'DEV'
                    }
                }
            },
            prod: {
                src: 'index_preprocess.html',
                dest: 'index.html',
                options: {
                    inline: true,
                    context: {
                        APP_ENV: 'PROD'
                    }
                }
            }
        },

        wiredep: {
            task: {
                src: [
                    'vendor_deps_css.html',
                    'vendor_deps_js.html'
                ],
                cwd: '.'
            }
        },

        watch: {
            bower: {
                files: 'vendor/*',
                tasks: 'wiredep'
            },
            cssmin: {
                files: 'src/styles/css/app.css',
                tasks: 'cssmin'
            },
            uglify: {
                files: 'src/scripts/**/*.js',
                tasks: 'uglify'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    src: 'app/styles/sass/app.scss',
                    dest: 'app/styles/css/app.css'
                }]
            }
        },

        includes: {
            deps: {
                cwd: '.',
                src: ['index_includes.html'],
                dest: 'index_preprocess.html',
                options: {
                    flatten: true,
                    includePath: '',
                    banner: ''
                }
            }
        },

        connect: {
            admin: {
                options: {
                    protocol: "http",
                    base: {
                        path: APP_PATH,
                        options: {
                            index: "index.html"
                        }
                    },
                    port: 3002,
                    keepalive: true,
                    livereload: true,
                    open: true,
                    hostname: 'localhost'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('watch', 'watch');
    grunt.registerTask('builddev', ['cssmin', 'uglify', 'wiredep', 'sass', 'includes:deps', 'preprocess:dev', 'connect']);
    grunt.registerTask('buildprod', ['cssmin', 'uglify', 'wiredep', 'sass', 'includes:deps', 'preprocess:prod', 'connect']);
};