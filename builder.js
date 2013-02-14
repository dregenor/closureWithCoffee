/**
 * Created with JetBrains PhpStorm.
 * User: dreg
 * Date: 14.02.13
 * Time: 23:46
 * To change this template use File | Settings | File Templates.
 */

var fs = require("fs"),
    coffee = require("coffee-script");

var fc = fs.readFileSync("test.coffee","UTF-8");

var res = coffee.compile(fc , {
    google: {
        includes: [],
        provides: [] }
});

fs.writeFileSync("test.js", res);