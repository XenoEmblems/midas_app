var 	craigslist 	= require("./craigslist.js")
		muse 		= require("./the_muse.js")

module.exports = {
  //var craigslist = require("./craigslist.js"),
  //		glassdoor = require("./glassdoor.js"),
  //		muse = require("./the_muse.js");

  		test_craig: function() {
  			craigslist.queryNode();
  		},

  		test_muse: function() {
  			muse.getJobs();
  		}
 }