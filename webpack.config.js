var path = require("path");    //import the path library

var DIST_DIR = path.resolve(__dirname,"dist"); // declare destination folder using path variable.
var SRC_DIR = path.resolve(__dirname,"src");  // declare source folder using path variable.

var config = {                                 //config object specifying entry file, ouput object , and modules (if any)
     entry: SRC_DIR +"/app/es6-basics.js",               //entry file
     output: {                                      //output object specifying path , filename and public path
     	path: DIST_DIR + "/app",
     	filename: "bundle.js",
     	publicPath: "/app/"
     },
     module: {                              
     	loaders: [
            {
            	test: /\.js?/,
            	include: SRC_DIR,
            	loader: "babel-loader",
            	query: {
            		presets: ["react", "es2015", "stage-2"]
            	}
            } 
     	]

     }

};

module.exports = config;