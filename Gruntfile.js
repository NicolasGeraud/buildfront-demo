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
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-wiredep")

    // Default task.
    grunt.registerTask('default', [
        "wiredep"
    ]);

};
