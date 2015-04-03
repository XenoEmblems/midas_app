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
        var result = glassdoor.query('employer', employerName);
        return result;
      },

      getPosition: function(positionName){
        return glassdoor.query('position', positionName);
      }
 }