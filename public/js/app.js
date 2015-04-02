var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.jobPosts = App.Collections.JobPosts;
	App.jobsView = App.Views.JobPostListView({ collection: App.jobPosts });
	
});
