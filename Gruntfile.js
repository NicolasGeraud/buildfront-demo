/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        properties: {
            app: '.',
            dist: './dist'
        },

        // Task configuration.
        wiredep: {
            task: {
                src: 'index.html'
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    livereload: 35728,
                    base: [
                        '.tmp',
                        '<%= properties.app %>'
                    ],
                    open: true
                }
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= properties.app %>/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= properties.app %>/images',
                javascriptsDir: '<%= properties.app %>/scripts',
                fontsDir: '<%= properties.app %>/styles/fonts',
                importPath: [
                    '<%= properties.app %>/bower_components/bootstrap-sass-official/assets/stylesheets',
                    '<%= properties.app %>/bower_components/bootstrap-sass-official/assets/fonts/bootstrap'
                    ],
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= properties.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: false
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= properties.app %>/index.html',
            options: {
                dest: '<%= properties.dist %>'
            }
        },
        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= properties.dist %>/{,*/}*.html'],
            css: ['<%= properties.dist %>/styles/{,*/}*.css'],
             options: {
                assetsDirs: ['<%= properties.dist %>']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= properties.dist %>/*',
                        '!<%= properties.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= properties.app %>',
                    dest: '<%= properties.dist %>',
                    src: [
                        '*.html',
                        'components/**/*',
                        'bower_components/**/*',
                        'images/**/*'
                    ]
                }]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },


        watch: {
            compass: {
                files: ['<%= properties.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'autoprefixer']
            },

            gruntfile: {
                files: ['Gruntfile.js']
            },


            livereload: {
                options: {
                    livereload: '<%= connect.server.options.livereload %>'
                },
                files: [
                    '<%= properties.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css'
                ]

            }
        }
    });

    require('load-grunt-tasks')(grunt);


    grunt.registerTask('build', [
        'clean:dist',
        'clean:server',
        'wiredep',
        'useminPrepare',
        'compass:server',
        'autoprefixer',
        'concat',
        'copy:dist',
        'cssmin',
        'usemin'
    ]);

    // Default task.
    grunt.registerTask('default', [
        'build',
        'connect:server',
        'watch'
    ]);

};
