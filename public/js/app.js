var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	// the router takes care of the rest of setup
	App.router = new App.Routers.JobPostRouter();

  //App.jobPosts = new App.Collections.Jobposts;
  //App.jobsView = new App.Views.JobPostList({ collection: App.jobPosts });

});
