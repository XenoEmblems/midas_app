/*

Queries Glassdoor API for either "position" or "employer" data.
Glassdoor key and id saved as environment variables.
Callback passed through /feeds index from original caller

*/


var request 		= require('request'),
	bodyParser  	= require('body-parser'),
	xml2js			= require('xml2js'),
	models      	= require('../models'),
	JobPost 		= models.job_posts,
	Employer 		= models.employers,
	Position		= models.positions;

var rootUrl = 'http://api.glassdoor.com/api/api.htm?';


module.exports = {


	query: function(query, value, callback) {
	    var queryParams = {
				useragent: '',
				format: 'json',
				userip: '208.185.23.206',
				v: '1',
				returnStates: 'true',
				admLevelRequested: '1',
				't.k': process.env.GLASSDOOR_KEY,
				't.p': process.env.GLASSDOOR_ID
			};

			if (query === 'position'){
				queryParams.action = 'jobs-prog';
				queryParams.jobTitle = value;
				queryParams.countryId = '1';
			} else if (query === 'employer') {
				queryParams.q = value;
				queryParams.action = 'employers';
				queryParams.city = 'New York';
				queryParams.state = 'New York';
			}

	    	request({
	    		// uri: rootUrl + partnerId + '&t.k=' + apiKey + '&userip=65.78.5.153 &useragent=&format=json&v=1&action=jobs-stats&returnStates=true&admLevelRequested=1',
				uri: rootUrl,
	    		method: 'GET',
	    		// json: true,
	    		qs: queryParams
	    	}, function(error, response, body) {
	    	 	if (!error) {
	    	 		callback(null, body);
	    	 	} else if (error) {
	    	 		callback(error);
	    	 	}
	    	});


	}
};
