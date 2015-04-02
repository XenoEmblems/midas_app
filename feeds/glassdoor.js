var request 	= require('request'),
	bodyParser  = require('body-parser'),
	xml2js			= require('xml2js'),
	models      = require('../models'),
	JobPost 		= models.job_posts,
	Employer 		= models.employers,
	Position		= models.positions;

module.exports = function() {

	var rootUrl = 'http://api.glassdoor.com/api/api.htm?';

	query: function(query, value) {
	    

	    var queryParams = {
				useragent: '',
				format: 'json',
				v: '1',
				returnStates: 'true',
				admLevelRequested: '1',
				t.k: GLASSDOOR_KEY,
				t.p: GLASSDOOR_ID;
			};

			if (query === 'position'){
				queryParams.action = 'jobs-prog';
				queryParams.jobTitle = value;
				queryParams.countryId = '1';
			} else if (query === 'employer') {
				queryParams.q = value;
				queryParams.action = 'employer';
				queryParams.city = 'New York';
				queryParams.city = 'New York';
			}

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
