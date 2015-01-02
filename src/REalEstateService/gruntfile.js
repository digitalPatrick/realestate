/// <reference path="wwwroot/lib/angular/angular.js" />
// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {
    grunt.initConfig({
        dir : {
            amgularapp: "wwwroot/app",
            publicfolder: "wwwroot/lib",
            assets: "wwwroot/assets"
        },
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/lib",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        concat: {
            options: {
                seperator : "\n\n"
            },
            jquery: {
                src: ["<%= dir.publicfolder %>/jquery/js/jquery.js", "<%= dir.assets %>/plugins/*.js", "<%= dir.publicfolder %>/**/modernizr.js", "<%= dir.publicfolder %>/toastr/toastr.js", "<%= dir.publicfolder %>/**/js/bootstrap.js", ],
                dest: "wwwroot/dist/js/jqueryconcat.js",
            },
            angular: {
                src: ["<%= dir.publicfolder %>/angular/angular.js", "<%= dir.publicfolder %>/**/angular-*.js", "!<%= dir.publicfolder %>/**/*-mobile-service.js", "<%= dir.publicfolder %>/**/dirPagination.js", "<%= dir.publicfolder %>/lodash/lodash.compat.js"],
                dest: "wwwroot/dist/js/angular.js",
            },
        },
        uglify: {
            angular: {
                files: {
                    "wwwroot/dist/js/angular.min.js": ["wwwroot/dist/js/jqueryconcat.js", "wwwroot/dist/js/angular.js"]
                },
            },
        },
        cssmin: {
            corecss: {
                files: {
                    'wwwroot/dist/css/core.css': ['wwwroot/lib/bootstrap/css/bootstrap.min.css', "wwwroot/assets/plugins/magnific-popup/magnific-popup.css", "wwwroot/lib/toastr/toastr.css", "wwwroot/css/sky-forms.css"],
                    'wwwroot/dist/css/essential.css': ["wwwroot/css/essentials.css", "wwwroot/css/layout.css", "wwwroot/css/header-3.css", "wwwroot/css/footer-default.css", "wwwroot/css/colorscheme/green.css", "wwwroot/css/mystyles.css"],
                },
            },
        },
    });


    // This command registers the default task which will install bower packages into wwwroot/lib
    grunt.registerTask("default", ["bower:install"]);
    grunt.registerTask('concat', ['concat']);
    grunt.registerTask("min", ["uglify"]);
    


    // The following line loads the grunt plugins.
    // This line needs to be at the end of this this file.
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};