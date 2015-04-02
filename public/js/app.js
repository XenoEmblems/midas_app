var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.jobPosts = App.Collections.JobPosts;
	App.jobsView = App.Views.JobPostList({ collection: App.jobPosts });
	App.router= new App.Routers.JobPostRouter();
});
