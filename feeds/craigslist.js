
// calls craigslist rss query and parses rss feed
// and adds new models to our db

var request 		= require('request'),
		bodyParser  = require('body-parser'),
		xml2js			= require('xml2js'),
		models      = require('../models'),
		JobPost 		= models.job_posts,
		Employer 		= models.employers,
		Position		= models.positions;

var query = 'http://newyork.craigslist.org/search/sof?query=backbone.js+&format=rss'

module.exports =  {

	queryNode: function() {
		request.get(query, function(error, response, body){
			xml2js.parseString(body, function (err, result) {
    	 		var resultsArray = result["rdf:RDF"].item;
    	 		resultsArray.forEach(function(job) {
					var data = {
						job_title: job.title[0],
						post_url: job.link[0],
						post_content: job.description[0],
						date_posted: job['dc:date'][0]
					};
					JobPost
						.count({
							where: {
								post_url: data.post_url
							}
						})
						.then(function (count) {
							if (!count) {
								JobPost.create(data);
							}
						});
						


					});
			});
		});
	}

};
