var request 	= require('request'),
	bodyParser  = require('body-parser'),
	xml2js			= require('xml2js'),
	models      = require('../models'),
	JobPost 		= models.job_posts,
	Employer 		= models.employers,
	Position		= models.positions;

module.exports = function() {

	var rootUrl = 'http://api.glassdoor.com/api/api.htm?';

	queryNode: function() {
	    var queryParams = {
				useragent: '',
				format: 'json',
				v: '1',
				action: 'jobstats'
				returnStates: 'true',
				admLevelRequested: '1',
				t.k: GLASSDOOR_KEY,
				t.p: GLASSDOOR_ID;
			};


	    	request({
	    		// uri: rootUrl + partnerId + '&t.k=' + apiKey + '&userip=65.78.5.153 &useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1',
					uri: rootUrl,
	    		method: 'GET',
	    		// json: true,
	    		qs: queryParams
	    	},
	    	 function(error, response, body) {
	    	 	var results = body.response;
	    	 	console.log(results);
	    	});
	    });
			
	});

};
