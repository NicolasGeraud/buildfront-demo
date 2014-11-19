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
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-wiredep");
    grunt.loadNpmTasks("grunt-contrib-connect")

    // Default task.
    grunt.registerTask('default', [
        "wiredep",
        "connect:server"
    ]);

};
