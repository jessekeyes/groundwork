#Grid-only deployable frame work
##Based on GroundworkCSS 2.0.0, but all the fat trimmed!

###Requirements
* node.js
* grunt.js
* ruby
* compass gem

###Getting started

Assuming you have all the requirements listed above, pull down the repo and run: `sudo npm install` to install all the grunt dependencies.

After doing some development you need to run gruntJS to compile the site. There are two functions:

* `grunt dev` which compiles compass, uglify, and autoprefixer. This is also the default so simple `grunt` will work too.
* `grunt build` does all of the above but then also minifies the css files

###Documentation
<a href="http://groundwork.sidereel.com/groundwork/docs/grid.html">Grid specs</a><br>
<a href="http://groundwork.sidereel.com/groundwork/docs/helpers.html">Helpers</a><br>
Note: documentation is prone to change but basic configurations should hold.

##TO DO:
* localize flat versions of doc files to keep with this version
