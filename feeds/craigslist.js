
// calls craigslist rss query and parses rss feed
// and adds new models to our db

var request 		= require('request'),
	bodyParser      = require('body-parser'),
	xml2js			= require('xml2js'),
	models          = require('../models'),
	JobPost 		= models.jobPosts;

module.exports =  {

	test: function() {
		console.log("craigslist was called");
	}

	

};