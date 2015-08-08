module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'server/public/assets/scripts/app.min.js' : 'client/scripts/app.js',
                    'server/public/assets/scripts/secretApp.min.js' : 'client/scripts/secretApp.js'
                },
            }
        },
        copy: {
            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "server/public/vendors/"
            },
            jquery: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "jquery/dist/jquery.min.js"
                ],
                "dest": "server/public/vendors/"
            },
            css: {
                expand: true,
                cwd: "client",
                src: [
                    "styles/styles.css"
                ],
                "dest" : "server/public/assets/"

            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};