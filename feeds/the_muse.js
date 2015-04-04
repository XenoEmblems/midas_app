// calls the muse api
// and adds new models to our db

var request 	= require('request'),
	bodyParser  = require('body-parser'),
	xml2js		= require('xml2js'),
	models      = require('../models'),
	JobPost 	= models.job_posts,
	Employer 	= models.employers,
	Position	= models.positions;


var queryParams = {
	'job_category[]': 'Engineering',
	'job_level[]': 'Entry Level',
	'job_location[]': 'New York City Metro Area',
	page: 1
}

var baseUrl = 'https://www.themuse.com/api/v1/jobs?json=true&job_category%5B%5D=Engineering&job_level%5B%5D=Entry+Level&job_location%5B%5D=New+York+City+Metro+Area&page=1&descending=true';

module.exports =  {
	getJobs: function(){
		request({uri: baseUrl, json: true}, function (error, response, body) {
			if(error){
				console.log("error: ", error)
			} else {
				body.results.forEach(function (job) {
					// Gets the Date...
    			var strcreate  = job.update_date;
    			var strposted  = job.creation_date;
    			//Slices it into the first 10 Characters.
					var datecreate = strcreate.slice(0, 10);
					var dateposted = strposted.slice(0, 10);
					
					var data = {
				 		job_title: job.title,
				 		//position_id: ,
				 		post_url: job.external_apply_link,
				 		post_content: job.description,
				 		//job_ID: ,
				 		employer_name: job.company_name,
				 		//salary: ,
				 		date_posted: dateposted,
				 		date_created: datecreate,
				 		post_id: job.id,
				 		location: job.locations[0],
				 		//is_entry: , //boolean
					};

					JobPost
						.count({
							where: {
								post_id: data.post_id
							}
						})
						.then(function (count) {
							if (!count) {
								JobPost.create(data); //if not, make a new one
							}
						});



				})
			}
		})
	}
};
