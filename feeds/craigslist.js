
// calls craigslist rss query and parses rss feed
// and adds new models to our db

var request 	= require('request'),
	bodyParser  = require('body-parser'),
	xml2js			= require('xml2js'),
	models      = require('../models'),
	JobPost 		= models.job_posts,
	Employer 		= models.employers,
	Position		= models.positions;

var queryArray = ['http://newyork.craigslist.org/search/sof?query=node.js+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=SQL+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=junior+developer+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=jQuery+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=front+end+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=back+end+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=ruby+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=html+developer+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=junior+java+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=HTML%2FCSS+developer+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=postgreSQL+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=mySQL+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=web+application+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=ruby+on+rails+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query=backbone+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query="JSON"+-senior+-sr+-lead+-game+-mobile&format=rss',
'http://newyork.craigslist.org/search/sof?query="REST"+-senior+-sr+-lead+-game+-mobile&format=rss'];



//negative keywords: +-senior+-sr+-lead+-game+-mobile
									

module.exports =  {
	queryNode: function() {
		for (i = 0; i < queryArray.length; i++) {
			request.get(queryArray[i], function(error, response, body){
				xml2js.parseString(body, function (err, result) {
	    	 		var resultsArray = result["rdf:RDF"].item;
	    	 		if (resultsArray) {

	    	 			resultsArray.forEach(function(job) {
	    	 		// Gets the Date...
	    						var str = job['dc:date'][0];
	    			//Slices it into the first 10 Characters.
							var date = str.slice(0, 10)

							var data = {
								job_title: job.title[0],
								post_url: job.link[0],
								post_content: job.description[0],
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

							})
	    	 		}
						


					});
				});
			}
		}
	};
