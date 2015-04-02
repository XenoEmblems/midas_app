var request 				= require('request');
		model 					= require('../models');
 		logger 					= require('morgan');
		bodyParser 			= require('body-parser');
		JobPost 				= models.jobPosts



module.exports = function(models) {

	var museUrl = 'http://api/v1/jobs?job_category%5B%5D=Engineering&job_level%5B%5D=Entry+Level&job_location%5B%5D=New+York+City+Metro+Area&page=1&descending=true';

queryNode: function() {
	request.get(museUrl, function(error, response, body) {
		resultsArray = result[museUrl].item;
		for (var i = 0; i < resultsArray.length, i++) {
			var job = resultsArray[i];
			var data = {
				job_title: job.title,
				position_id: ,
				post_url: job.external_apply_link,
				post_content: job.description,
				job_ID: ,
				employer_name: job.company_name,
				salary: ,
				date_posted: job.update_date,
				date_created:job.creation_date,
				post_id: job.id,
				location: job.locations[0],
				is_entry: , //boolean
					}
				level: job.level_displays[0],
				employer_id:
			};
			JobPost.create(data);
		});
	});


};
