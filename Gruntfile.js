'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    peg: {
      parser: {
        src: 'smallbasic.pegjs',
        dest: 'src/compiler/parser.ts',
        options: {
          wrapper: function(src, parser) {
            var buildMsg = '/* Do not edit this file directly. It is automatically generated. Please edit smallbasic.pegjs */\n';
            return `${buildMsg}export default ${parser};\n`;
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-peg');

  grunt.registerTask('buildParser', ['peg']);
};
