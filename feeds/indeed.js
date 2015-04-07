
// calls indeed xml query and parses the response
// and adds new models to our db

var request 	= require('request'),
	bodyParser  = require('body-parser'),
	xml2js			= require('xml2js'),
	models      = require('../models'),
	JobPost 		= models.job_posts,
	Employer 		= models.employers,
	Position		= models.positions;

var queryArray = [
	'http://api.indeed.com/ads/apisearch?publisher=' + process.env.INDEED_KEY + '&q=javascript&l=new+york%2C+ny&sort=&radius=&st=&jt=&start=0&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2'
];



//negative keywords: +-senior+-sr+-lead+-game+-mobile
									

module.exports =  {
	query: function() {
		for (i = 0; i < queryArray.length; i++) {
			request.get(queryArray[i], function(error, response, body){
				xml2js.parseString(body, function (err, result) {
	    	 		var resultsArray = result.response.results[0].result;
	    	 		resultsArray.forEach(function(job) {

						var data = {
							job_title: job.jobtitle[0],
							employer_name: job.company[0],
							post_url: job.url[0],
							post_content: job.snippet[0],
							date_posted: job.date[0]
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
	}
};