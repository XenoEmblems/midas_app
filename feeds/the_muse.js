// calls the muse api
// and adds new models to our db

var request 	= require('request'),
	bodyParser  = require('body-parser'),
	xml2js		= require('xml2js'),
	models      = require('../models'),
	JobPost 	= models.job_posts,
	Employer 	= models.employers,
	Position	= models.positions;


//var data = {
//				job_title: job.title,
//				//position_id: ,
//				post_url: job.external_apply_link,
//				post_content: job.description,
//				//job_ID: ,
//				employer_name: job.company_name,
//				//salary: ,
//				date_posted: job.update_date,
//				date_created:job.creation_date,
//				post_id: job.id,
//				location: job.locations[0],
//				//is_entry: , //boolean
//			}


var queryParams = {
	job_category: 'Engineering',
	job_level: 'Entry Level',
	job_location: 'New York City Metro Area',
	page: 1
}

var baseUrl = 'http://www.themuse.com/api/v1/jobs/';

module.exports =  {
	getJobs: function(){
		request({
			uri: baseUrl,
			method: 'GET',
			qs: queryParams
		}, function (error, response, body) {
			if(error){
				console.log("error!", error)
			} else {
				console.log(body);
			}
		})
};
