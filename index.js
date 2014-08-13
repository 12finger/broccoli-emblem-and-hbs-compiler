var path = require('path');
var Filter = require('broccoli-filter');
var jsStringEscape = require('js-string-escape');
var compiler = require('ember-template-compiler');
var emblem = require('emblem');

module.exports = TemplateCompiler;
TemplateCompiler.prototype = Object.create(Filter.prototype);
TemplateCompiler.prototype.constructor = TemplateCompiler;
function TemplateCompiler (inputTree, options) {
  if (!(this instanceof TemplateCompiler)) {
    return new TemplateCompiler(inputTree, options);
  }
  this.inputTree = inputTree;
  this.options = options || {};
}

TemplateCompiler.prototype.extensions = ['hbs', 'handlebars', 'embl', 'emblem', 'hbx'];
TemplateCompiler.prototype.targetExtension = 'js';

TemplateCompiler.prototype.processString = function (string, relativePath) {

  var a = relativePath.toString().split('.')[1] === 'emblem'
  var b = relativePath.toString().split('.')[1] === 'embl'
  var c = relativePath.toString().split('.')[1] === 'hbx'

  var isEmblemFile = a || b || c

  if (isEmblemFile) {
    var compiled = emblem.precompile(compiler.EmberHandlebars, string);
    return 'export default Ember.Handlebars.template(' + compiled + ');\n';
  } else{
    var extensionRegex = /.handlebars|.hbs/gi;
    var filename = relativePath.toString().split('templates' + path.sep).reverse()[0].replace(extensionRegex, '');
    var input = compiler.precompile(string);
    var template = "Ember.Handlebars.template(" + input + ");\n";
    if (this.options.module === true) {
      return "import Ember from 'ember';\nexport default " + template;
    } else {
      return "Ember.TEMPLATES['" + filename + "'] = " + template;
    }
  }
};
