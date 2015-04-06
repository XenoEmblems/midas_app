var 	craigslist 	 = require("./craigslist.js")
		  muse 		     = require("./the_muse.js")
      glassdoor    = require("./glassdoor.js")
      indeed       = require("./indeed.js")

module.exports = {
  //var craigslist = require("./craigslist.js"),
  //		glassdoor = require("./glassdoor.js"),
  //		muse = require("./the_muse.js");

  		test: function() {	
        muse.getJobs();
      },
      
      testtwo: function() {
        craigslist.queryNode();
      },

      testIndeed: function(){
        indeed.query();
      },

      getEmployer: function(employerName, callback){
        glassdoor.query('employer', employerName, callback);
      },

      getPosition: function(positionName, callback){
        glassdoor.query('position', positionName, callback);
      }
 }