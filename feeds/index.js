var 	craigslist 	= require("./craigslist.js")
		muse 		= require("./the_muse.js")
    glassdoor = require("./glassdoor.js")

module.exports = {
  //var craigslist = require("./craigslist.js"),
  //		glassdoor = require("./glassdoor.js"),
  //		muse = require("./the_muse.js");

  		test: function() {
  			craigslist.queryNode();
        muse.getJobs();
  		},

      getEmployer: function(employerName){
        glassdoor.query('employer', employerName);
      },

      getPosition: function(positionName){
        glassdoor.query('position', positionName);
      }
 }