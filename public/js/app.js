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
