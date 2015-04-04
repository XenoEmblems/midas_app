var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	// the router takes care of the rest of setup
	App.jobsRouter = new App.Routers.JobPostRouter();
});
