/**
 * @project         medbase
 * @version         1.0  25-09-2014
 * @author          New Identity http://new-identity.eu  - zarro
 * @copyright       Copyright (C) 2009 - 2014 New Identity. All rights reserved.
 * @license         http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */

//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        concat: {
            options: {
                separator: ';'
            },
            frontend_JS: {
                src: [
                    './components/modernizr/modernizr.js',
                    './components/jquery/dist/jquery.js',
                    './components/bootstrap/dist/js/bootstrap.js',
                    './components/bootstrapValidator/dist/js/bootstrapValidator.min.js',
                    './components/jquery-nicescroll/jquery.nicescroll.js',
                    './assets/js/jquery.nicescroll.plus.js'
                ],
                dest: './assets/js/frontend-base.js'
            }
        },

        less: {
            development: {
                options: {
                    compress: false  //minifying the result
                },
                files: {
                    //compiling bootstrap.less into frontend files
                    "./assets/css/frontend-base.css":"./assets/less/twbootstrap/bootstrap.less",
                    "./assets/css/fontawesome.css":"./assets/less/font-awesome/font-awesome.less",
                    "./assets/css/theme.css":"./assets/less/twbootstrap/theme.less",
                    "./assets/css/home.css":"./assets/less/twbootstrap/home.less",
                    "./assets/css/registree-page.css":"./assets/less/twbootstrap/registree-page.less",
                    "./assets/css/ui-test.css":["./assets/less/twbootstrap/ui-test.less","./components/animate.css/animate.css"]
                }
            }
        },

        /*uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            frontend_JS: {
                files: {
                    './assets/js/frontend-base.min.js': './assets/js/frontend-base.js'
                }
            }
        },*/

        watch: {
        /*frontend_JS: {
                files: [
                    //watched files
                    './components/modernizr/modernizr.js',
                    './components/jquery/dist/jquery.js',
                    './components/bootstrap/dist/js/bootstrap.js'
                ],
                tasks: ['concat:frontend_JS','uglify:frontend_JS'],     //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            },*/

            less: {
                files: [
                    './assets/less/twbootstrap/*.less',
                    './assets/less/font-awesome/*.less',
                    './assets/less/animations/*.less'],//watched files

                tasks: ['less'],                          //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Task definition
    grunt.registerTask('default', ['concat','less',/*'uglify',*/'watch']);


};