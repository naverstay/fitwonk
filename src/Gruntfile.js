module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            styles: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    '../css/style.css': 'sass/main_global.scss'
                }
            }
        }
    });
    
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);

};