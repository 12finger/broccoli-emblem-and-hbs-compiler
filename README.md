# broccoli-emblem-and-hbs-compiler

Emblem.js and Handlebars precompiler for projects that use broccoli. (e.g. ember-cli)

simple drop in solution, requires no extra configuration. *simply works™*

## Installation

just add it to the ember-cli project's `package.json` to the devDependencies:

```
  "devDependencies": {
    ... ,
    ... ,
    "broccoli-emblem-compiler": "git://github.com/12finger/broccoli-emblem-and-hbs-compiler.git"
  }
```
then, of course
```bash
npm install
```
done.

## Usage

simply go on and use all your existing `.hbs` templates and then, one by one, you can transform them to `.emblem` files. 

both templates can coexist in the same project and will be compiled.

##Specials
for your coding convenience and not to scare away the people used to the short `.hbs` file ending used for handlebar templates, one can use `.hbx` as a file-type for emblem templates.

### Credits
totally inspired (not to say: fully copied) from these:

[broccoli-emblem-compiler](https://github.com/antramm/broccoli-emblem-compiler) 
and the standard hbs-compiler: [broccoli-ember-hbs-template-compiler](https://github.com/toranb/broccoli-ember-hbs-template-compiler)

### License
MIT