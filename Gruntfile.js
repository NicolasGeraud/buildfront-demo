/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

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
                    livereload: 35729,
                    open: true
                }
            }
        },

        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.server.options.livereload %>'
                },
                files: [
                    'index.html',
                    'styles/app.css'
                ]

            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-wiredep");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Default task.
    grunt.registerTask('default', [
        "wiredep",
        "connect:server",
        "watch"
    ]);

};
