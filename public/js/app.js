var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

//function cookieTest(){
//	var cookies = document.cookie
//	var userName = 'Mark R. Zuckerberg'
//	console.log("do I have cookies?", cookies)
//	document.cookie = 'name: ' + userName;
//	var cookies = document.cookie
//	console.log("do I have one now?", cookies)
//
//}


$(function() {
	console.log('Loaded, bro.');
	// the router takes care of the rest of setup
	App.jobsRouter = new App.Routers.JobPostRouter();
});

/*var node = function() {
	var queryUrl = '/job_posts/query?=node';

	$.ajax({
		url: queryUrl,
		method= 'GET'
	}).done(function(response) {
		var data = {
			job_title: data.job_title;
			employer_name: data.employer_name;
			location: data.location;
			date_posted: data.date_posted;
		}
		});
	});
};*/
