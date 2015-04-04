
// calls craigslist rss query and parses rss feed
// and adds new models to our db

var request 	= require('request'),
	bodyParser  = require('body-parser'),
	xml2js		= require('xml2js'),
	models      = require('../models'),
	JobPost 	= models.job_posts,
	Employer 	= models.employers,
	Position	= models.positions;

var query = 'http://newyork.craigslist.org/search/sof?query=node.js+&format=rss'

module.exports =  {

	queryNode: function() {
		request.get(query, function(error, response, body){
			xml2js.parseString(body, function (err, result) {
    	 		var resultsArray = result["rdf:RDF"].item;
    	 		resultsArray.forEach(function(job) {
    	 		// Gets the Date...
    			var str = job['dc:date'][0];
    			//Slices it into the first 10 Characters..
					var date = str.slice(0, 10);

					var data = {
						job_title: job.title[0],
						post_url: job.link[0],
						post_content: job.description[0],
						//Puts it in the data array.
						date_posted: date
					};
					// checks db to see if we have this already	
					JobPost
						.count({
							where: {
								post_url: data.post_url
							}
						})
						.then(function (count) {
							if (!count) {
								JobPost.create(data); //if not, make a new one
							}
						});
						


					});
			});
		});
	}

};
